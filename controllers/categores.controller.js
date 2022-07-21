const Category = require("../models/Category.model");

module.exports.categoresControllers = {
  getCats: async (req, res) => {
    const cat = await Category.find();
    res.json(cat);
  },
  addCat: (req, res) => {
    Category.create({
      name: req.body.name,
    }).then(() => {
      res.json("категория добавлена");
    });
  },
  deleteCat: async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.json("категория удалена");
  },
};
