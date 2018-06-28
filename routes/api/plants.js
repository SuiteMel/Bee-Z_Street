const router = require("express").Router();
const plantsController = require("../../controllers/plantsController");

// Matches with "/api/plants"
router.route("/")
  .get(plantsController.findAll)
  .post(plantsController.findBySearch);

module.exports = router;
