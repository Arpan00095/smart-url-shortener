import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLink,
  FaQrcode,
  FaChartBar,
  FaLock,
} from "react-icons/fa";
import UrlShortener from "../tools/UrlShortener";
import QRGenerator from "../tools/QRGenerator";
import AnalyticsTool from "../tools/AnalyticsTool";
import PasswordProtectedFolder from "../tools/PasswordProtectedFolder";
import DashboardPreview from "./DashboardPreview";
import ToolCards from "./ToolCards";
import HeroLeft from "./HeroLeft";

const Hero = () => {
  const [activeTool, setActiveTool] = useState("url");

  const tools = [
    {
      id: "url",
      title: "URL Shortener",
      description: "Create smart short links in seconds.",
      icon: <FaLink className="text-3xl text-blue-600" />,
      active: "border-blue-600 bg-blue-50 dark:bg-slate-800",
    },
    {
      id: "qr",
      title: "QR Generator",
      description: "Generate QR Codes instantly.",
      icon: <FaQrcode className="text-3xl text-purple-600" />,
      active: "border-purple-600 bg-purple-50 dark:bg-slate-800",
    },
    {
      id: "password",
      title: "Password Protected URL",
      description: "Create password protected short links.",
      icon: <FaLock className="text-5xl text-red-500 mb-4" />,
      active: "border-red-600 bg-red-50 dark:bg-slate-800",
    },
    {
      id: "folder",
      title: "Protected Folder",
      description: "Upload multiple files inside a password protected folder.",
      icon: <FaLock className="text-5xl text-green-600 mb-4" />,
      active: "border-green-600 bg-green-50 dark:bg-slate-800",
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-32 pb-24 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <HeroLeft
            tools={tools}
            activeTool={activeTool}
            setActiveTool={setActiveTool}
          />
          <DashboardPreview />

        </div>

      </div>

    </section>
  );
};

export default Hero;