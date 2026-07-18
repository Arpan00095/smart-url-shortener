import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 dark:bg-black text-white transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Logo */}

          <div className="lg:col-span-2">

            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              LinkNova
            </h2>

            <p className="mt-6 text-slate-400 leading-8 max-w-md">
              LinkNova is a modern URL Shortener platform that helps you
              create smart links, generate QR Codes and monitor every click
              with powerful real-time analytics.
            </p>

            {/* Social */}

            <div className="flex gap-5 mt-8 text-2xl">

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="hover:text-blue-400 transition duration-300 cursor-pointer" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="hover:text-blue-400 transition duration-300 cursor-pointer" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="hover:text-sky-400 transition duration-300 cursor-pointer" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="hover:text-pink-400 transition duration-300 cursor-pointer" />
              </a>

            </div>

            {/* Contact */}

            <div className="mt-8 space-y-3 text-slate-400">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <span>support@linknova.in</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>West Bengal, India</span>
              </div>

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Product
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <a
                  href="#features"
                  className="hover:text-white transition"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#analytics"
                  className="hover:text-white transition"
                >
                  Analytics
                </a>
              </li>

              <li className="hover:text-white transition cursor-pointer">
                QR Generator
              </li>

              <li className="hover:text-white transition cursor-pointer">
                URL Shortener
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Password Protected URLs
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition"
                >
                  Contact
                </Link>
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Blog
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Careers
              </li>

            </ul>

          </div>

          {/* Support */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Support
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link
                  to="/help-support"
                  className="hover:text-white transition"
                >
                  Help Center
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms-conditions"
                  className="hover:text-white transition"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/status"
                  className="hover:text-white transition"
                >
                  System Status
                </Link>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-slate-500 text-center md:text-left">
            © 2026 LinkNova. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-slate-500">

            <Link
              to="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy
            </Link>

            <Link
              to="/terms-conditions"
              className="hover:text-white transition"
            >
              Terms
            </Link>

            <Link
              to="/contact"
              className="hover:text-white transition"
            >
              Contact
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;