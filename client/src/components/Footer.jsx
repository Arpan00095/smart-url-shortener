import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Logo */}

          <div className="lg:col-span-2">

            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              LinkNova
            </h2>

            <p className="mt-6 text-gray-400 leading-8 max-w-md">
              LinkNova helps you shorten URLs, generate QR codes,
              and track every click with beautiful analytics.
            </p>

            <div className="flex gap-5 mt-8 text-2xl">

              <FaGithub className="hover:text-blue-400 cursor-pointer transition" />

              <FaLinkedin className="hover:text-blue-400 cursor-pointer transition" />

              <FaTwitter className="hover:text-blue-400 cursor-pointer transition" />

              <FaInstagram className="hover:text-pink-400 cursor-pointer transition" />

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Product
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-white cursor-pointer">Features</li>

              <li className="hover:text-white cursor-pointer">Analytics</li>

              <li className="hover:text-white cursor-pointer">Pricing</li>

              <li className="hover:text-white cursor-pointer">API</li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-white cursor-pointer">About</li>

              <li className="hover:text-white cursor-pointer">Blog</li>

              <li className="hover:text-white cursor-pointer">Careers</li>

              <li className="hover:text-white cursor-pointer">Contact</li>

            </ul>

          </div>

          {/* Support */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Support
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-white cursor-pointer">Help Center</li>

              <li className="hover:text-white cursor-pointer">Privacy</li>

              <li className="hover:text-white cursor-pointer">Terms</li>

              <li className="hover:text-white cursor-pointer">Status</li>

            </ul>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-gray-500">

          © 2026 LinkNova. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;