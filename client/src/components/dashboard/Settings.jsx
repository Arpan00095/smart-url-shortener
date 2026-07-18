import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import {
  FaUser,
  FaLock,
  FaSave,
  FaPalette,
  FaBell,
  FaShieldAlt,
  FaChartBar,
  FaInfoCircle,
  FaQuestionCircle,
} from "react-icons/fa";
import toast from "react-hot-toast";
import api from "../../services/api";
import NotificationSettings from "./NotificationSettings";

const Settings = () => {
  const navigate = useNavigate();

  const { darkMode, setDarkMode } = useTheme();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setName(res.data.data.name);

    } catch (err) {
      console.log(err);
      toast.error("Failed to load profile");
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      // Update Name
      await api.put(
        "/auth/profile",
        {
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update Password (only if entered)
      if (password.trim() !== "") {
        await api.put(
          "/auth/change-password",
          {
            password,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      toast.success("Profile Updated Successfully");
      setPassword("");

    } catch (err) {
      console.log(err);
      toast.error(
        err.response?.data?.message || "Update Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 mt-6">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
        ⚙️ Settings
      </h2>


      {/* Account */}

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg p-4 md:p-6">

        <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2 mb-6">
          Account
        </h3>


        <div className="space-y-5">

          <div>
            <label className="font-semibold mb-2 block text-slate-700 dark:text-slate-300">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>


          <div>
            <label className="font-semibold mb-2 block text-slate-700 dark:text-slate-300">
              Change Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New password"
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>


          <button
            onClick={handleSave}
            disabled={loading}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold"
          >

            <FaSave />

            {loading ? "Saving..." : "Save Changes"}

          </button>


        </div>

      </div>


      {/* Appearance */}

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg p-4 md:p-6">

        <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <FaPalette />
          Appearance
        </h3>


        <div className="mt-4 space-y-3">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl"
          >

            <span className="text-slate-800 dark:text-white">
              🌙 Dark Mode
            </span>


            <div
              className={`w-12 h-6 rounded-full p-1 transition ${darkMode
                ? "bg-blue-600"
                : "bg-slate-300"
                }`}
            >

              <div
                className={`w-4 h-4 bg-white rounded-full transition ${darkMode
                  ? "translate-x-6"
                  : ""
                  }`}
              />

            </div>


          </button>

          <button className="w-full text-left p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-800 dark:text-white">
            🎨 Theme Color
          </button>

        </div>

      </div>


      {/* Notifications */}

      <NotificationSettings />


      {/* Privacy */}

      <Link to="/privacy-security">

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition cursor-pointer">

          <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <FaShieldAlt />
            Privacy & Security
          </h3>


          <p className="text-slate-500 dark:text-slate-400 mt-3">
            Your account security settings.
          </p>

        </div>

      </Link>


      {/* Statistics */}
      <div
        onClick={() =>
          navigate("/dashboard", {
            state: {
              menu: "analytics",
            },
          })
        }
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition cursor-pointer"
      >

        <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <FaChartBar />
          Account Statistics
        </h3>


        <p className="text-slate-500 dark:text-slate-400 mt-3">
          Track your LinkNova activity.
        </p>


      </div>


      {/* About */}

      <Link to="/about">

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition cursor-pointer">

          <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <FaInfoCircle />
            About LinkNova
          </h3>

        </div>

      </Link>

      {/* Help */}

      <Link to="/help-support">

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition cursor-pointer">

          <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <FaQuestionCircle />
            Help & Support
          </h3>

        </div>

      </Link>





    </div>
  );
};

export default Settings;