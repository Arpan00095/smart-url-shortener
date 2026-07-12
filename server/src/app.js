const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/health.routes");
const authRoutes = require("./routes/auth.routes");
const supabase = require("./config/supabase"); // 👈 Ye line add karo

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 👇 Temporary Test Route
app.get("/api/test-db", async (req, res) => {
  const { data, error } = await supabase
    .from("users")
    .select("*");

  res.json({ data, error });
});

// Routes
app.use("/api", healthRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;