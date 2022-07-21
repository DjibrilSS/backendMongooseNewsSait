const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  title: string,
  text: string,
  catId: [{ type: mongoose.Schema.Types.ObjectId, ref: "category" }],
});

const Category = mongoose.model("category", newsSchema);

module.exports = Category;
