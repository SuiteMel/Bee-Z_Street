const router = require("express").Router();
const plantsController = require("../../controllers/plantsController");
//const passport = require("passport");
//require("../../config/passport")(passport);

// Matches with "/api/plants"
router
  .route("/")
  .get(
    //passport.authenticate("jwt", { session: false }),
    plantsController.findAll
  )
  .post(
    //passport.authenticate("jwt", { session: false }),
    plantsController.findBySearch
  );

router.route("/:id").get(
  //passport.authenticate("jwt", { session: false }),
  plantsController.findById
);

module.exports = router;
