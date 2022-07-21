const Category = require("../models/Category.model");

module.exports.categoresControllers = {
  getCats: (req, res) => {
    res.json("ok");
  },
  addCat: (req, res) => {
      Category.create({
        name : req.body.name
      }).then(() => {
        res.json('assadasd')
      });
  },
  deleteCat: (req, res) => {
    res.json("ok");
  },
};
