import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCards";
import UrlTable from "../components/dashboard/UrlTable";
import QRTable from "../components/dashboard/QRTable";
import Settings from "../components/dashboard/Settings";
import DashboardAnalytics from "../components/dashboard/DashboardAnalytics";
import ProtectedFolders from "../components/dashboard/ProtectedFolders";

const Dashboard = () => {

  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(
    location.state?.menu || "dashboard"
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [refresh, setRefresh] = useState(false);
  const [weeklyData, setWeeklyData] = useState({
    Mon: 0,
    Tue: 0,
    Wed: 0,
    Thu: 0,
    Fri: 0,
    Sat: 0,
    Sun: 0,
  });

  const handleRefresh = () => {
    setRefresh((prev) => !prev);
  };

  useEffect(() => {
    if (location.state?.menu) {
      setActiveMenu(location.state.menu);
    }
  }, [location]);

  useEffect(() => {
    const fetchWeeklyAnalytics = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/url/analytics/weekly`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const result = await response.json();

        if (result.success) {
          setWeeklyData(result.data);
        }

      } catch (error) {
        console.log(error);
      }
    };

    fetchWeeklyAnalytics();

  }, [refresh]);

  return (
    <div className="flex flex-col lg:flex-row bg-slate-100 dark:bg-slate-950 min-h-screen">

      <DashboardSidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1 bg-slate-100 dark:bg-slate-950 min-h-screen p-4 sm:p-6 lg:p-8">
        <DashboardNavbar
          setSidebarOpen={setSidebarOpen}
        />

        {activeMenu === "dashboard" && (
          <>
            <DashboardHeader />

            <StatsCards refresh={refresh} />

            <UrlTable
              refresh={refresh}
              onRefresh={handleRefresh}
            />

            <DashboardAnalytics
              refresh={refresh}
              weeklyData={weeklyData}
            />
          </>
        )}

        {activeMenu === "links" && (
          <>
            <DashboardHeader />

            <UrlTable
              refresh={refresh}
              onRefresh={handleRefresh}
            />
          </>
        )}

        {activeMenu === "qr" && (
          <>
            <DashboardHeader />
            <QRTable />
          </>

        )}

        {activeMenu === "folders" && (
          <>
            <DashboardHeader />

            <ProtectedFolders
              refresh={refresh}
              onRefresh={handleRefresh}
            />
          </>
        )}

        {activeMenu === "analytics" && (
          <>
            <DashboardHeader />

            <DashboardAnalytics
              refresh={refresh}
              weeklyData={weeklyData}
            />
          </>
        )}

        {activeMenu === "settings" && (
          <>
            <DashboardHeader />
            <Settings />
          </>
        )}

      </div>

    </div>
  );
};

export default Dashboard;