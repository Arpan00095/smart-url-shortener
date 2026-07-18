import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      // Normal Login Token
      const token = localStorage.getItem("token");

      if (token) {
        setAuthenticated(true);
        setLoading(false);
        return;
      }

      // Google Login Session
      const { data } = await supabase.auth.getSession();

      if (data.session) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }

      setLoading(false);
    };

    checkUser();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return authenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;