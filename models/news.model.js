const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  title: String,
  text: String,
  catId: [{ type: mongoose.Schema.Types.ObjectId, ref: "category" }],
});

const News = mongoose.model("news", newsSchema);

module.exports = News;
