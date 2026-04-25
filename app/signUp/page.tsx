import { signUp } from "../signUp";



export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-800 mb-1">Sign up</h1>
        <p className="text-sm text-gray-400 mb-6">สมัครเข้าใช้งาน</p>
        <form action={signUp} className="flex flex-col gap-4">
          <input
            className="w-full rounded-lg px-4 py-2.5 bg-gray-50 border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            type="text"
            name="username"
            placeholder=" Username"
            required
          />
          <input
            className="w-full rounded-lg px-4 py-2.5 bg-gray-50 border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            type="text"
            name="password"
            placeholder=" Password"
            required
          />
          <button className="w-full rounded-lg py-2.5 bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition-colors mt-1">
            sign up
          </button>
        </form>
      </div>
    </main>
  );
}
