const path = require("path");
const router = require("express").Router();
const plantRoutes = require("./plants");
const authRoutes = require("./auth");

// API Routes
router.use("/api", plantRoutes);
router.use("/api", authRoutes);

//// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
