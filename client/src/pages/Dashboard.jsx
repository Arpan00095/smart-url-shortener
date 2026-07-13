import { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";
import StatsCards from "../components/StatsCards";
import UrlForm from "../components/UrlForm";
import UrlTable from "../components/UrlTable";
import DashboardAnalytics from "../components/DashboardAnalytics";
import SearchFilter from "../components/SearchFilter";

const Dashboard = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshTable = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <div className="flex">
      <DashboardSidebar />

      <div className="flex-1 bg-slate-100 min-h-screen p-8">
        <DashboardNavbar />
        <StatsCards />
        <UrlForm refreshTable={refreshTable} />
        <SearchFilter />
        <UrlTable refresh={refresh} />
        <DashboardAnalytics />
      </div>
    </div>
  );
};

export default Dashboard;