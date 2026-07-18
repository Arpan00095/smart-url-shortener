import { useEffect, useState } from "react";
import api from "../../services/api";

import StatsCard from "./StatsCard";

import {
  FaLink,
  FaMousePointer,
  FaQrcode,
  FaFire,
} from "react-icons/fa";

const StatsCards = ({ refresh }) => {
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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      <StatsCard
        title="Total Links"
        value={stats.total_urls}
        icon={<FaLink />}
        color="bg-blue-600"
      />

      <StatsCard
        title="Total Clicks"
        value={stats.total_clicks}
        icon={<FaMousePointer />}
        color="bg-green-600"
      />

      <StatsCard
        title="QR Codes"
        value="0"
        icon={<FaQrcode />}
        color="bg-purple-600"
      />

      <StatsCard
        title="Top Clicks"
        value={stats.most_clicked?.clicks || 0}
        icon={<FaFire />}
        color="bg-orange-500"
      />

    </div>
  );
};

export default StatsCards;