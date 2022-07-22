const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  name: String,
  text: String,
  newsId: [{ type: mongoose.Schema.Types.ObjectId, ref: "news" }],
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
