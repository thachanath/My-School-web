import Calendar from "@/app/calendar";
import fetchdata from "@/app/fetchdata";


export default async function calendarPage() {
    let data = await fetchdata()
  return (
   <>
   <Calendar doccuments={data}/>
   </>
  )
}