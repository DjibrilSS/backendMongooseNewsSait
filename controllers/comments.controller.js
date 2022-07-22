const Comment = require("../models/Comment.model");

module.exports.commentsControllers = {
  getComments: async (req, res) => {
    const comment = await Comment.find({ newsId: req.params.id });
    res.json(comment);
  },
  addComment: async (req, res) => {
    await Comment.create({
      name: req.body.name,
      text: req.body.text,
      newsId: req.params.id,
    });
    res.json("комментарий добавлен");
  },
  deleteComment: async (req, res) => {
    await Comment.findByIdAndDelete(req.params.id);
    res.json("комментарий удален");
  },
};
