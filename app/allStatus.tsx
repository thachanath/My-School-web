"use client";

import { useState } from "react";
import { updateSta } from "@/app/updateSta";
export const dynamic = 'force-dynamic'

export default function AllStatus({ documents }: { documents: any[] }) {
  const [search, setSearch] = useState("");
  const [selectPop, setOpenPop] = useState<any>(false);

  let filters = documents.filter(
    (document) =>
      document.name.includes(search) ||
      document.teacher.includes(search) ||
      document.date.includes(search) ||
      document.time.includes(search) ||
      document.status.includes(search),
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <h1 className="text-xl font-semibold text-gray-800">รายการขอทั้งหมอ</h1>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg px-3 py-2 bg-white border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 w-full sm:w-52"
        />
      </div>

      <div className="hidden sm:block bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wide whitespace-nowrap">
                  ครูพ่อ/ครูแม่
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wide whitespace-nowrap">
                  ทำอะไร
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wide whitespace-nowrap">
                  ชื่อนักเรียน
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wide whitespace-nowrap">
                  วันที่
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wide whitespace-nowrap">
                  เวลา
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wide whitespace-nowrap">
                  สถานะ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filters?.map((document) => (
                <tr
                  key={document.id}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => setOpenPop(document)}
                >
                  <td className="px-4 py-3.5 text-sm text-gray-700 whitespace-nowrap">
                    {document.teacher}
                  </td>
                  <td className="px-4 py-3.5 text-sm text-gray-700 whitespace-nowrap">
                    {document.type}
                  </td>
                  <td className="px-4 py-3.5 text-sm text-gray-700 whitespace-nowrap">
                    {document.name}
                  </td>
                  <td className="px-4 py-3.5 text-sm text-gray-700 whitespace-nowrap">
                    {document.date}
                  </td>
                  <td className="px-4 py-3.5 text-sm text-gray-700 whitespace-nowrap">
                    {document.startTime?.slice(0, 5)} -{" "}
                    {document.endTime?.slice(0, 5)}
                  </td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        document.status === "admit"
                          ? "bg-green-500"
                          : document.status === "reject"
                            ? "bg-red-400"
                            : "bg-gray-400"
                      }`}
                    >
                      {document.status === "admit"
                        ? "อณุญาติ"
                        : document.status === "reject"
                          ? "ไม่อนุญาติ"
                          : "อยู่ระหว่างตัดสินใจ"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="sm:hidden flex flex-col gap-3">
          {filters.map((document) => (
              <div
                key={document.id}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm cursor-pointer active:bg-gray-50"
                onClick={() => setOpenPop(document)}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{document.name}</p>
                    <p className="text-xs text-gray-500">{document.teacher}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 ${document.status === "admit"
                          ? "bg-green-500"
                          : document.status === "reject"
                            ? "bg-red-400"
                            : "bg-gray-400"
                      }`}>
                      {document.status === "admit"
                        ? "อณุญาติ"
                        : document.status === "reject"
                          ? "ไม่อนุญาติ"
                          : "อยู่ระหว่างตัดสินใจ"}</span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 mt-1">
                  <span>{document.type}</span>
                  <span>{document.date}</span>
                  <span>{document.startTime?.slice(0, 5)} – {document.endTime?.slice(0, 5)}</span>
                </div>
              </div>
))}
      </div>
       {selectPop && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white rounded-t-2xl sm:rounded-xl shadow-lg w-full sm:max-w-md p-6">
            <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
              <h2 className="font-semibold text-gray-800">รายละเอียด</h2>
              <button onClick={() => setOpenPop(false)} className="text-gray-400 hover:text-gray-600 text-lg leading-none">✕</button>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              ขออนุญาต <span className="font-medium">{selectPop.type}</span>{" "}
              วันที่ {selectPop.date} เวลา {selectPop.startTime?.slice(0, 5)} – {selectPop.endTime?.slice(0, 5)}{" "}
              เพื่อ {selectPop.purpose} โดยมีครู {selectPop.parent} เป็นผู้ดูแล
            </p>
            <div className="mt-5 flex gap-2">
              <button
                className="flex-1 py-2.5 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-500 transition-colors"
                onClick={async () => { await updateSta(selectPop.id, "admit"); setOpenPop(false) }}
              >
                อนุญาต
              </button>
              <button
                className="flex-1 py-2.5 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-400 transition-colors"
                onClick={async () => { await updateSta(selectPop.id, "reject"); setOpenPop(false) }}
              >
                ไม่อนุญาต
              </button>
              <button
                className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenPop(false)}
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}