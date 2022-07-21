const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  name: string,
  text: string,
  newsId: [{ type: mongoose.Schema.Types.ObjectId, ref: "news" }],
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
