import {
  FaLink,
  FaQrcode,
  FaLock,
} from "react-icons/fa";

import DashboardPreview from "./DashboardPreview";
import HeroLeft from "./HeroLeft";

const Hero = () => {

  const tools = [
    {
      id: "url",
      title: "URL Shortener",
      description: "Create smart short links in seconds.",
      link: "/url-shortener",
      icon: <FaLink className="text-3xl text-blue-600" />,
    },
    {
      id: "qr",
      title: "QR Generator",
      description: "Generate QR Codes instantly.",
      link: "/qr-generator",
      icon: <FaQrcode className="text-3xl text-purple-600" />,
    },
    {
      id: "password",
      title: "Password Protected URL",
      description: "Create password protected short links.",
      link: "/protected-url",
      icon: <FaLock className="text-5xl text-red-500 mb-4" />,
    },
    {
      id: "folder",
      title: "Protected Folder",
      description: "Upload multiple files inside a password protected folder.",
      link: "/protected-folder",
      icon: <FaLock className="text-5xl text-green-600 mb-4" />,
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-32 pb-24 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <HeroLeft tools={tools} />

          <DashboardPreview />

        </div>

      </div>

    </section>
  );
};

export default Hero;