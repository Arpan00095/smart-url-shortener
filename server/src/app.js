const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/health.routes");
const authRoutes = require("./routes/auth.routes");
const urlRoutes = require("./routes/url.routes");
const qrRoutes = require("./routes/qr.routes");
const supabase = require("./config/supabase");
const notificationRoutes = require("./routes/notification.routes");
const notificationsRoutes = require("./routes/notifications.routes");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Temporary Test Route
app.get("/api/test-db", async (req, res) => {
  const { data, error } = await supabase
    .from("users")
    .select("*");

  res.json({ data, error });
});

app.get("/api/debug-users", async (req, res) => {
  const { data, error } = await supabase
    .from("users")
    .select("id,name,email");

  res.json({
    data,
    error,
    url: process.env.SUPABASE_URL,
  });
});

// Routes
app.use("/api", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/url", urlRoutes);
app.use("/api/qr", qrRoutes);
app.use("/api/notification-settings", notificationRoutes);
app.use("/api/notifications", notificationsRoutes);
// Redirect Route
app.use("/", urlRoutes)

module.exports = app;