import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { supabase } from "../services/supabase";

const Login = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", form);

      console.log(res.data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Agar backend user bhej raha hai to ye bhi save karenge
      // localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/");

    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };
  useEffect(() => {
    const handleSession = async () => {
      // Agar pehle se session hai (page refresh ke baad)
      const {
        data: { session },
      } = await supabase.auth.getSession();

      console.log("SESSION =", session);

      if (session) {
        const res = await api.post("/auth/google-login", {
          name: session.user.user_metadata.full_name,
          email: session.user.email,
        });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        navigate("/");
      }
    };

    handleSession();

    // Google Login ke baad session change ko listen karega
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("EVENT =", event);
      console.log("SESSION =", session);

      if (event === "SIGNED_IN" && session) {
        const res = await api.post("/auth/google-login", {
          name: session.user.user_metadata.full_name,
          email: session.user.email,
        });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        navigate("/");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin + "/login",
      },
    });

    if (error) {
      alert(error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            value={form.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>

        </form>
        <div className="mt-5">

          <div className="text-center text-gray-500 mb-4">
            OR
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full border border-gray-300 rounded-lg p-3 flex items-center justify-center gap-3 hover:bg-gray-100"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-6 h-6"
            />

            Continue with Google
          </button>

        </div>
      </div>
    </div>
  );
};

export default Login;