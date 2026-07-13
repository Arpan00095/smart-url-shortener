import { FaBell, FaSearch } from "react-icons/fa";

const DashboardNavbar = () => {
  return (
    <header className="flex items-center justify-between bg-white rounded-2xl shadow-sm border border-slate-200 px-6 py-4 mb-8">

      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-1">
          Welcome back 👋 Manage your links effortlessly.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="hidden md:flex items-center bg-slate-100 rounded-xl px-4 py-2">
          <FaSearch className="text-slate-400 mr-2" />
          <input
            type="text"
            placeholder="Search links..."
            className="bg-transparent outline-none"
          />
        </div>

        {/* Notification */}
        <button className="relative w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition">
          <FaBell />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-3 py-2">
          <img
            src="https://i.pravatar.cc/100"
            alt="user"
            className="w-10 h-10 rounded-full"
          />

          <div className="hidden md:block">
            <h3 className="font-semibold">
              Arpan
            </h3>

            <p className="text-sm text-slate-500">
              Admin
            </p>
          </div>

        </div>

      </div>

    </header>
  );
};

export default DashboardNavbar;