const path = require("path");
const router = require("express").Router();
const plantRoutes = require("./plants");

router.use("/api", plantRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
