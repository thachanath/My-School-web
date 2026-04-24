"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 flex items-center gap-1 overflow-x-auto">
        <span className="text-sm font-semibold text-gray-700 mr-3 shrink-0">
          ระบบขออนุญาต
        </span>
        <Link
          href="/dashboard"
          className={`px-3 py-1.5 text-sm text-gray-600 rounded-md shrink-0 ${pathname == "/dashboard" ? "border-b-2 border-blue-600 rounded-none" : "hover:bg-gray-100 transition-colors"}`}
        >
          ปฏิทิน
        </Link>
        <Link
          href="/dashboard/status"
          className={`px-3 py-1.5 text-sm text-gray-600 rounded-md shrink-0 ${pathname == "/dashboard/status" ? "border-b-2 border-blue-600 rounded-none" : "hover:bg-gray-100 transition-colors"}`}
        >
          สถานะ
        </Link>
        <Link
          href="/dashboard/form"
          className={`px-3 py-1.5 text-sm text-gray-600 rounded-md shrink-0 ${pathname == "/dashboard/form" ? "border-b-2 border-blue-600 rounded-none" : "hover:bg-gray-100 transition-colors"}`}
        >
          แบบฟอร์ม
        </Link>
      </nav>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {children}
      </div>
    </div>
  );
}
