const router = require("express").Router();
const plantsController = require("../../controllers/plantsController");

// Matches with "/api/plants"
router.route("/search").get(plantsController.findAll);

module.exports = router;
