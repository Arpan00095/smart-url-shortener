import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import api from "../services/api";
import { supabase } from "../services/supabase";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });



  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {

      if (event === "SIGNED_IN" && session) {

        try {
          const res = await api.post("/auth/google-login", {
            name: session.user.user_metadata.full_name,
            email: session.user.email,
          });

          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));

          toast.success("Google Signup Successful");

          navigate("/dashboard");

        } catch (err) {
          console.log(err);
          toast.error("Google Signup Failed");
        }

      }

    });

    return () => {
      subscription.unsubscribe();
    };

  }, [navigate]);

  const handleGoogleSignup = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${import.meta.env.VITE_CLIENT_URL}/signup`,
      }
    });

    if (error) {
      console.log(error);
      toast.error("Google Login Failed");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      return toast.error("Please fill all fields");
    }

    if (form.password !== form.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    if (form.password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    try {
      setLoading(true);

      await api.post("/auth/signup", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      toast.success("Account Created Successfully");

      navigate("/login");

    } catch (err) {
      console.log("Signup Error:", err);
      console.log("Response:", err.response);

      toast.error(
        err.response?.data?.message || "Signup Failed"
      );
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center px-5">

      <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl w-full max-w-md p-10 border border-white/20">

        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            L
          </div>
        </div>

        <h1 className="text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Join LinkNova
        </h1>

        <p className="text-slate-500 text-center mb-8">
          Create your account and manage your smart links 🚀
        </p>


        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full border border-gray-300 rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-slate-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-6 h-6"
          />

          Continue with Google
        </button>


        <div className="flex items-center my-5">
          <div className="flex-1 border-t"></div>

          <span className="px-3 text-gray-500">
            OR
          </span>

          <div className="flex-1 border-t"></div>
        </div>


        <form
          onSubmit={handleSignup}
          className="space-y-5"
        >

          {/* Name */}

          <div>

            <label className="font-semibold mb-2 flex items-center gap-2">
              <FaUser />
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition"
            />

          </div>

          {/* Email */}

          <div>

            <label className="font-semibold mb-2 flex items-center gap-2">
              <FaEnvelope />
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@gmail.com"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition"
            />

          </div>

          {/* Password */}

          <div>

            <label className="font-semibold mb-2 flex items-center gap-2">
              <FaLock />
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-4 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

          </div>

          {/* Confirm Password */}

          <div>

            <label className="font-semibold mb-2 flex items-center gap-2">
              <FaLock />
              Confirm Password
            </label>

            <div className="relative">

              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="********"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirm(!showConfirm)
                }
                className="absolute right-4 top-4 text-gray-500"
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

          </div>

          <button
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

        </form>

        <p className="text-center mt-8">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 font-bold ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Signup;