import {
  FaHome,
  FaLink,
  FaChartBar,
  FaQrcode,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const DashboardSidebar = () => {
  return (
    <aside className="w-72 min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">

      {/* Logo */}
      <div className="px-8 py-8 border-b border-slate-700">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          LinkNova
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          Smart URL Platform
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-5 py-8 space-y-3">

        <button className="w-full flex items-center gap-4 bg-blue-600 px-5 py-4 rounded-xl font-semibold">
          <FaHome />
          Dashboard
        </button>

        <button className="w-full flex items-center gap-4 hover:bg-slate-700 px-5 py-4 rounded-xl transition">
          <FaLink />
          My Links
        </button>

        <button className="w-full flex items-center gap-4 hover:bg-slate-700 px-5 py-4 rounded-xl transition">
          <FaChartBar />
          Analytics
        </button>

        <button className="w-full flex items-center gap-4 hover:bg-slate-700 px-5 py-4 rounded-xl transition">
          <FaQrcode />
          QR Codes
        </button>

        <button className="w-full flex items-center gap-4 hover:bg-slate-700 px-5 py-4 rounded-xl transition">
          <FaCog />
          Settings
        </button>

      </nav>

      {/* Bottom */}
      <div className="p-5 border-t border-slate-700">

        <button className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 py-3 rounded-xl transition">
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </aside>
  );
};

export default DashboardSidebar;