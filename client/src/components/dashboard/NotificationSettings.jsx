import { useState } from "react";
import toast from "react-hot-toast";

const NotificationSettings = () => {
  const [saving, setSaving] = useState(false);

  const [settings, setSettings] = useState({
    click_notifications: true,
    weekly_report: true,
    product_updates: false,
    security_alerts: true,
  });

  const handleChange = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const saveSettings = async () => {
    setSaving(true);

    // Fake delay
    setTimeout(() => {
      setSaving(false);
      toast("🚀 Notification settings will be available in a future update.", {
        icon: "🔔",
      });
    }, 600);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">

      <h2 className="text-2xl font-bold dark:text-white mb-2">
        🔔 Notification Settings
      </h2>

      <p className="text-gray-500 dark:text-gray-400 mb-2">
        Notification preferences are currently under development.
      </p>

      <p className="text-sm text-blue-600 dark:text-blue-400 mb-8">
        This feature will be available in the next LinkNova update.
      </p>

      <div className="space-y-6">

        <Toggle
          title="Link Click Notifications"
          description="Receive notifications when someone clicks your links."
          checked={settings.click_notifications}
          onChange={() => handleChange("click_notifications")}
        />

        <Toggle
          title="Weekly Reports"
          description="Get a summary of your weekly analytics."
          checked={settings.weekly_report}
          onChange={() => handleChange("weekly_report")}
        />

        <Toggle
          title="Product Updates"
          description="Be the first to know about new features."
          checked={settings.product_updates}
          onChange={() => handleChange("product_updates")}
        />

        <Toggle
          title="Security Alerts"
          description="Important login and account activity alerts."
          checked={settings.security_alerts}
          onChange={() => handleChange("security_alerts")}
        />

      </div>

      <button
        onClick={saveSettings}
        disabled={saving}
        className="mt-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 disabled:opacity-60"
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>

    </div>
  );
};

const Toggle = ({ title, description, checked, onChange }) => {
  return (
    <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-5">

      <div>
        <h3 className="font-semibold text-lg dark:text-white">
          {title}
        </h3>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>

      <button
        onClick={onChange}
        className={`w-14 h-8 rounded-full transition relative ${
          checked ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <div
          className={`absolute top-1 w-6 h-6 bg-white rounded-full transition ${
            checked ? "left-7" : "left-1"
          }`}
        />
      </button>

    </div>
  );
};

export default NotificationSettings;