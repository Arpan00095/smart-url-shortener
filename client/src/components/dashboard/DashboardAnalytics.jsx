import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { useEffect, useState } from "react";
import api from "../../services/api";



const DashboardAnalytics = ({ refresh, weeklyData }) => {
  const [stats, setStats] = useState({
    total_urls: 0,
    total_clicks: 0,
    most_clicked: null,
  });
  useEffect(() => {
    fetchStats();
  }, [refresh]);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/url/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStats(res.data.data);

    } catch (err) {
      console.log(err);
    }
  };
  const data = [
    {
      day: "Mon",
      clicks: weeklyData?.Mon || 0,
    },
    {
      day: "Tue",
      clicks: weeklyData?.Tue || 0,
    },
    {
      day: "Wed",
      clicks: weeklyData?.Wed || 0,
    },
    {
      day: "Thu",
      clicks: weeklyData?.Thu || 0,
    },
    {
      day: "Fri",
      clicks: weeklyData?.Fri || 0,
    },
    {
      day: "Sat",
      clicks: weeklyData?.Sat || 0,
    },
    {
      day: "Sun",
      clicks: weeklyData?.Sun || 0,
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg p-4 md:p-6 mt-8">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-800 dark:text-white">
        Weekly Click Analytics
      </h2>

      <div className="h-64 sm:h-72 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="5 5" />

            <XAxis dataKey="day" />

            <YAxis width={35} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="clicks"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardAnalytics;