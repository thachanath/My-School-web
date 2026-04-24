import { senddoc } from "@/app/sendform";

export default function Home() {
  return (
    <div className="max-w-lg">
      <h1 className="text-xl font-semibold text-gray-800 mb-6">กรอกฟอร์ม</h1>
      <form
        action={senddoc}
        className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-5 shadow-sm"
      >
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-500 tracking-wide">
            ประเภท
          </label>
          <select
            name="type"
            className="rounded-lg px-3 py-2.5 bg-gray-50 border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <option value="ออกหอ">ออกหอ</option>
            <option value="เบิกมือถือ">เบิกมือถือ</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-500 tracking-wide">
            ชื่อนักเรียน
          </label>
          <input
            name="student"
            type="text"
            placeholder="ระบุชื่อนักเรียน (รวมทุกคน)"
            className="rounded-lg px-3 py-2.5 bg-gray-50 border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-gray-500 tracking-wide">
            ครูที่ต้องรับรู้
          </label>
          <div className="flex flex-wrap gap-3">
            <input
              type="checkbox"
              name="teacher"
              value="ครูเบิร์ด"
              className="rounded border-gray-300 accent-gray-700"
            />
            <label
              htmlFor="ครูเบิร์ด"
              className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
            >
              ครูเบิร์ด
            </label>
            <input
              type="checkbox"
              name="teacher"
              value="ครูอู"
              className="rounded border-gray-300 accent-gray-700"
            />
            <label
              htmlFor="ครูอู"
              className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
            >
              ครูอู
            </label>
            <input
              type="checkbox"
              name="teacher"
              value="ครูอิ๋ว"
              className="rounded border-gray-300 accent-gray-700"
            />
            <label
              htmlFor="ครูอิ๋ว"
              className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
            >
              ครูอิ๋ว
            </label>
            <input
              type="checkbox"
              name="teacher"
              value="ครูน้ำ"
              className="rounded border-gray-300 accent-gray-700"
            />
            <label
              htmlFor="ครูน้ำ"
              className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
            >
              ครูน้ำ
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-500 tracking-wide">
            วันที่
          </label>
          <input
            type="date"
            name="date"
            className="rounded-lg px-3 py-2.5 bg-gray-50 border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-xs font-medium text-gray-500 tracking-wide">
              เวลาเริ่ม
            </label>
            <input
              type="time"
              name="start-time"
              className="rounded-lg px-3 py-2.5 bg-gray-50 border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-xs font-medium text-gray-500 tracking-wide">
              เวลาสิ้นสุด
            </label>
            <input
              type="time"
              name="end-time"
              className="rounded-lg px-3 py-2.5 bg-gray-50 border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-500 tracking-wide">
            วัตถุประสงค์
          </label>
          <input
            type="text"
            name="purpose"
            placeholder="เพื่อ..."
            className="rounded-lg px-3 py-2.5 bg-gray-50 border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-500 tracking-wide">
            ครูผู้ดูแล
          </label>
          <input
            type="text"
            name="parent"
            placeholder="ชื่อครูผู้ดูแล"
            className="rounded-lg px-3 py-2.5 bg-gray-50 border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        <button className="w-full rounded-lg py-2.5 bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition-colors mt-1">
          ส่งแบบฟอร์ม
        </button>
      </form>
    </div>
  );
}
