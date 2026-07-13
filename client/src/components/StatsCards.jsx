import StatsCard from "./StatsCard";
import {
  FaLink,
  FaMousePointer,
  FaQrcode,
  FaUsers,
} from "react-icons/fa";

const StatsCards = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      <StatsCard
        title="Total Links"
        value="1,250"
        icon={<FaLink />}
        color="bg-blue-600"
      />

      <StatsCard
        title="Total Clicks"
        value="14,580"
        icon={<FaMousePointer />}
        color="bg-green-600"
      />

      <StatsCard
        title="QR Codes"
        value="856"
        icon={<FaQrcode />}
        color="bg-purple-600"
      />

      <StatsCard
        title="Users"
        value="2,480"
        icon={<FaUsers />}
        color="bg-orange-500"
      />

    </div>
  );
};

export default StatsCards;