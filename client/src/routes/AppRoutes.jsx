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

import ProtectedRoute from "./ProtectedRoute";

import RedirectPage from "../pages/RedirectPage";
import VerifyProtectedUrl from "../pages/VerifyProtectedUrl";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={<Home />}
        />


        {/* Auth Pages */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* About Page */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* Help & Support Page */}
        <Route
          path="/help-support"
          element={<HelpSupport />}
        />

        {/* Privacy Policy Page */}
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        {/* Privacy & Security Page */}
        <Route
          path="/privacy-security"
          element={<PrivacySecurity />}
        />

        {/* Terms & Conditions Page */}
        <Route
          path="/terms-conditions"
          element={<TermsConditions />}
        />

        {/* System Status Page */}
        <Route
          path="/status"
          element={<SystemStatus />}
        />


        {/* Protected URL Verify */}
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


        {/* Short URL Redirect */}
        <Route
          path="/s/:shortCode"
          element={<RedirectPage />}
        />


        {/* 404 Page */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;