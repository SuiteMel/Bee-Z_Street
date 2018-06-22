const db = require("../models");

// Defining methods for the plantsController
module.exports = {
  findAll: function (req, res) {
    db.Plant
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
