import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import About from "../pages/About";
import HelpSupport from "../pages/HelpSupport";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import SystemStatus from "../pages/SystemStatus";
import PrivacySecurity from "../pages/PrivacySecurity";

import UrlShortenerPage from "../pages/UrlShortenerPage";
import QRGeneratorPage from "../pages/QRGeneratorPage";
import PasswordProtectedUrlPage from "../pages/PasswordProtectedUrlPage";
import ProtectedFolderPage from "../pages/ProtectedFolderPage";

import ProtectedRoute from "./ProtectedRoute";

import RedirectPage from "../pages/RedirectPage";
import VerifyProtectedUrl from "../pages/VerifyProtectedUrl";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Public Pages */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/help-support"
          element={<HelpSupport />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/privacy-security"
          element={<PrivacySecurity />}
        />

        <Route
          path="/terms-conditions"
          element={<TermsConditions />}
        />

        <Route
          path="/status"
          element={<SystemStatus />}
        />

        {/* Individual Tool Pages */}

        <Route
          path="/url-shortener"
          element={<UrlShortenerPage />}
        />

        <Route
          path="/qr-generator"
          element={<QRGeneratorPage />}
        />

        <Route
          path="/protected-url"
          element={<PasswordProtectedUrlPage />}
        />

        <Route
          path="/protected-folder"
          element={<ProtectedFolderPage />}
        />

        {/* Password Protected URL */}
        <Route
          path="/protected/:shortCode"
          element={<VerifyProtectedUrl />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Redirect */}
        <Route
          path="/s/:shortCode"
          element={<RedirectPage />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;