import {
  FaBars,
  FaTimes,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../../services/supabase";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();

  const { darkMode, setDarkMode } = useTheme();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = async () => {
    await supabase.auth.signOut();

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-3xl font-black">
          <span className="text-blue-600">Link</span>
          <span className="text-purple-600">Nova</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">

          <a
            href="#features"
            className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition"
          >
            Features
          </a>

          <a
            href="#pricing"
            className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition"
          >
            Pricing
          </a>

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {token ? (
            <div className="relative flex items-center gap-5">

              <Link
                to="/dashboard"
                className="font-semibold text-blue-600"
              >
                Dashboard
              </Link>

              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 rounded-xl px-3 py-2"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>

                <div className="text-left hidden lg:block">
                  <p className="font-semibold text-slate-800 dark:text-white">
                    {user?.name}
                  </p>

                  <p className="text-xs text-slate-500">
                    {user?.email}
                  </p>
                </div>

                <IoChevronDown className="text-slate-500" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-16 w-60 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border dark:border-slate-700 overflow-hidden">

                  <div className="px-5 py-4 border-b dark:border-slate-700">
                    <h3 className="font-semibold dark:text-white">
                      {user?.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {user?.email}
                    </p>
                  </div>

                  <Link
                    to="/dashboard"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-3 px-5 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-white"
                  >
                    <FaUserCircle />
                    Dashboard
                  </Link>

                  <Link
                    to="/dashboard"
                    state={{ menu: "settings" }}
                    onClick={() => {
                      setProfileOpen(false);
                    }}
                    className="flex items-center gap-3 px-5 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-white"
                  >
                    <FaCog />
                    Settings
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-3 px-5 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    <FaSignOutAlt />
                    Logout
                  </button>

                </div>
              )}

            </div>
          ) : (
            <div className="flex items-center gap-4">

              <Link
                to="/login"
                className="font-semibold text-blue-600"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full"
              >
                Get Started
              </Link>

            </div>
          )}

        </div>

        {/* Mobile Right */}
        <div className="flex items-center gap-3 md:hidden">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="text-2xl dark:text-white"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t dark:border-slate-800">

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block px-5 py-4 border-b dark:border-slate-800 dark:text-white"
          >
            Home
          </Link>

          <a
            href="#features"
            className="block px-5 py-4 border-b dark:border-slate-800 dark:text-white"
          >
            Features
          </a>

          <a
            href="#pricing"
            className="block px-5 py-4 border-b dark:border-slate-800 dark:text-white"
          >
            Pricing
          </a>

          {token ? (
            <>
              <Link
                to="/dashboard"
                onClick={() => setOpen(false)}
                className="block px-5 py-4 border-b dark:border-slate-800 dark:text-white"
              >
                Dashboard
              </Link>

              <button
                onClick={logout}
                className="w-full text-left px-5 py-4 text-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="block px-5 py-4 border-b dark:border-slate-800 dark:text-white"
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={() => setOpen(false)}
                className="block px-5 py-4 text-blue-600 font-semibold"
              >
                Signup
              </Link>
            </>
          )}

        </div>
      )}
    </nav>
  );
};

export default Navbar;