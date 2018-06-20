const router = require("express").Router();
const booksController = require("../../controllers/plantsController");

// Matches with "/api/plants"
router.route("/").get(booksController.findAll);

module.exports = router;
