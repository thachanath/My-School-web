"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar({ doccuments }: { doccuments: any[] }) {
  const calendarEvent = doccuments
    .filter((doc) => doc.status == "admit")
    .map((doc) => ({
      title: `${doc.name} ${doc?.startTime.slice(0, 5)} -
                ${doc.endTime?.slice(0, 5)} (${doc.type})`,
      start: `${doc.date}T${doc.startTime}`,
      end: `${doc.date}T${doc.endTime}`,
    }));
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,today,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek",
        }}
        events={calendarEvent}
        height="auto"
        eventTimeFormat={{
          hour: "numeric",
          minute: "2-digit",
          meridiem: "short",
        }}
      />
    </div>
  );
}
