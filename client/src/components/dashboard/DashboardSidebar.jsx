import {
  FaHome,
  FaLink,
  FaChartBar,
  FaQrcode,
  FaCog,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const DashboardSidebar = ({
  activeMenu,
  setActiveMenu,
  sidebarOpen,
  setSidebarOpen,
}) => {
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);

    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged out successfully");

    navigate("/login");
  };

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed md:static
          top-0 left-0
          z-50
          w-72
          min-h-screen
          bg-gradient-to-b
          from-slate-900
          via-slate-800
          to-slate-900
          dark:from-slate-950
          dark:via-slate-900
          dark:to-slate-950
          text-white
          flex
          flex-col
          transition-transform
          duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="px-8 py-8 border-b border-slate-700 dark:border-slate-800 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              LinkNova
            </h1>

            <p className="text-slate-400 dark:text-slate-500 text-sm mt-2">
              Smart URL Platform
            </p>
          </div>

          <button
            className="md:hidden text-xl"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-5 py-8 space-y-3">
          <button
            onClick={() => handleMenuClick("dashboard")}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition ${
              activeMenu === "dashboard"
                ? "bg-blue-600 font-semibold"
                : "hover:bg-slate-700 dark:hover:bg-slate-800"
            }`}
          >
            <FaHome />
            Dashboard
          </button>

          <button
            onClick={() => handleMenuClick("links")}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition ${
              activeMenu === "links"
                ? "bg-blue-600 font-semibold"
                : "hover:bg-slate-700 dark:hover:bg-slate-800"
            }`}
          >
            <FaLink />
            My Links
          </button>

          <button
            onClick={() => handleMenuClick("analytics")}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition ${
              activeMenu === "analytics"
                ? "bg-blue-600 font-semibold"
                : "hover:bg-slate-700 dark:hover:bg-slate-800"
            }`}
          >
            <FaChartBar />
            Analytics
          </button>

          <button
            onClick={() => handleMenuClick("qr")}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition ${
              activeMenu === "qr"
                ? "bg-blue-600 font-semibold"
                : "hover:bg-slate-700 dark:hover:bg-slate-800"
            }`}
          >
            <FaQrcode />
            QR Codes
          </button>

          <button
            onClick={() => handleMenuClick("settings")}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition ${
              activeMenu === "settings"
                ? "bg-blue-600 font-semibold"
                : "hover:bg-slate-700 dark:hover:bg-slate-800"
            }`}
          >
            <FaCog />
            Settings
          </button>
        </nav>

        {/* Bottom */}
        <div className="p-5 border-t border-slate-700 dark:border-slate-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 py-3 rounded-xl transition"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;