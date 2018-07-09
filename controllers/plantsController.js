const db = require("../models");

//getToken = headers => {
//if (headers && headers.authorization) {
//const parted = headers.authorization.split(" ");
//if (parted.length === 2) {
//return parted[1];
//} else {
//return null;
//}
//} else {
//return null;
//}
//};

// Defining methods for the plantsController
module.exports = {
  findAll: (req, res) => {
    // const token = getToken(req.headers);
    // if (token) {
    db.Plant.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    //} else {
    //return res.status(403).send({ success: false, msg: "Unauthorized." });
    //}
  },
  findBySearch: (req, res) => {
    //const token = getToken(req.headers);
    //if (token) {
    console.log(req.body);
    db.Plant.find(req.body)
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
    //} else {
    //return res.status(403).send({ success: false, msg: "Unauthorized." });
    //}
  },
  findById: (req, res) => {
    //const token = getToken(req.headers);
    //if (token) {
    db.Plant.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    //} else {
    //return res.status(403).send({ success: false, msg: "Unauthorized." });
    //}
  }
};
