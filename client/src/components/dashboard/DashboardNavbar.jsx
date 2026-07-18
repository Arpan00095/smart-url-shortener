import {
  FaBell,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import api from "../../services/api";

const DashboardNavbar = ({ setSidebarOpen }) => {
  const [user, setUser] = useState(null);

  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] =
    useState(false);

  useEffect(() => {
    fetchUser();
    fetchNotifications();
  }, []);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/notifications", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Notification Response:", res.data);
      console.log("Data:", res.data.data);
      console.log("Is Array:", Array.isArray(res.data.data));

      setNotifications(
        Array.isArray(res.data.data) ? res.data.data : []
      );
    } catch (err) {
      console.log(err);
    }
  };

  const markAllRead = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.put(
        "/notifications/read-all",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchNotifications();
    } catch (err) {
      console.log(err);
    }
  };

  const markOneRead = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await api.put(
        `/notifications/${id}/read`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchNotifications();

    } catch (err) {
      console.log(err);
    }
  };

  const unreadCount = notifications.filter(
    (item) => !item.is_read
  ).length;

  return (
    <header className="flex items-center justify-between bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 px-4 md:px-6 py-4 mb-8">

      {/* Left */}
      <div className="flex items-center gap-4">

        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden text-2xl text-slate-700 dark:text-white"
        >
          <FaBars />
        </button>

        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
            Dashboard
          </h1>

          <p className="hidden md:block text-slate-500 dark:text-slate-400 mt-1">
            Welcome back 👋 Manage your links effortlessly.
          </p>
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-3 md:gap-4">

        {/* Search */}
        <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-2">
          <FaSearch className="text-slate-400 mr-2" />

          <input
            type="text"
            placeholder="Search links..."
            className="bg-transparent outline-none text-slate-800 dark:text-white"
          />
        </div>

        {/* Notification */}
        <div className="relative">

          <button
            onClick={() =>
              setShowNotifications(!showNotifications)
            }
            className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            <FaBell />

            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center px-1">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div
              className="absolute right-0 mt-3 w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl z-50"


            >
              <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">

                <h3 className="font-bold text-lg text-slate-800 dark:text-white">
                  Notifications
                </h3>

                <button
                  onClick={markAllRead}
                  className="text-blue-600 text-sm font-semibold"
                >
                  Mark all read
                </button>

              </div>

              <div className="max-h-96 overflow-y-auto">

                {notifications.length === 0 ? (
                  <p className="p-6 text-center text-slate-500">
                    No notifications
                  </p>
                ) : (
                  notifications.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => markOneRead(item.id)}
                      className={`p-4 border-b cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition ${!item.is_read
                        ? "bg-blue-50 dark:bg-slate-800"
                        : ""
                        }`}
                    >
                      <h4 className="font-semibold text-slate-800 dark:text-white">
                        {item.title}
                      </h4>

                      <p className="text-sm text-slate-500 mt-1">
                        {item.message}
                      </p>

                      <p className="text-xs text-slate-400 mt-2">
                        {new Date(
                          item.created_at
                        ).toLocaleString()}
                      </p>
                    </div>
                  ))
                )}

              </div>

            </div>
          )}

        </div>

        {/* User */}
        <div className="flex items-center gap-2 md:gap-3 bg-slate-100 dark:bg-slate-800 rounded-xl px-2 md:px-3 py-2">

          <img
            src={
              user?.profileImage ||
              "https://i.pravatar.cc/100"
            }
            alt="user"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full"
          />

          <div className="hidden sm:block">

            <h3 className="font-semibold text-slate-800 dark:text-white">
              {user?.name || "User"}
            </h3>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              {user?.role || "User"}
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default DashboardNavbar;