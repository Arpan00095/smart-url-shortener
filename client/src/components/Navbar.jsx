import {
  FaBars,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { IoChevronDown } from "react-icons/io5";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">
          <span className="text-blue-600">Link</span>
          <span className="text-purple-600">Nova</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <a href="#features" className="hover:text-blue-600 transition">
            Features
          </a>

          <a href="#pricing" className="hover:text-blue-600 transition">
            Pricing
          </a>

          {token ? (
            <>
              <div className="relative flex items-center gap-6">

                <Link
                  to="/dashboard"
                  className="text-blue-600 font-semibold hover:text-purple-600 transition"
                >
                  Dashboard
                </Link>

                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-3 hover:bg-gray-100 px-3 py-2 rounded-xl transition"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>

                  <div className="text-left">
                    <p className="font-semibold text-sm">
                      {user?.name}
                    </p>

                    <p className="text-xs text-gray-500">
                      {user?.email}
                    </p>
                  </div>

                  <IoChevronDown className="text-gray-500" />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 top-14 w-56 bg-white rounded-xl shadow-xl border overflow-hidden z-50">

                    <div className="px-4 py-3 border-b">
                      <h3 className="font-semibold">{user?.name}</h3>
                      <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>

                    <Link
                      to="/dashboard"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                      onClick={() => setProfileOpen(false)}
                    >
                      <FaUserCircle />
                      Dashboard
                    </Link>

                    <button
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                    >
                      <FaCog />
                      Settings
                    </button>

                    <button
                      onClick={logout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50"
                    >
                      <FaSignOutAlt />
                      Logout
                    </button>

                  </div>
                )}

              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-blue-600 font-semibold"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full hover:scale-105 transition"
              >
                Get Started
              </Link>
            </>
          )}

        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden bg-white shadow-lg">

          <Link
            to="/"
            className="block p-4 border-b"
          >
            Home
          </Link>

          <a
            href="#features"
            className="block p-4 border-b"
          >
            Features
          </a>

          <a
            href="#pricing"
            className="block p-4 border-b"
          >
            Pricing
          </a>

          {token ? (
            <>
              <Link
                to="/dashboard"
                className="block p-4 border-b"
              >
                Dashboard
              </Link>

              <button
                onClick={logout}
                className="w-full text-left p-4 text-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block p-4 border-b"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="block p-4"
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