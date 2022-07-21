const News = require("../models/news.model");

module.exports.newsControllers = {
  getNews: async (req, res) => {
    const news = await News.find();
    res.json(news);
  },
  getByIdNews: async (req, res) => {
    const news = await News.findById(req.params.id);
    res.json(news);
  },
  getByCatNews: async (req, res) => {
    const news = await News.findOne({ catId: req.params.id });
    res.json(news);
  },
  addNews: (req, res) => {
    News.create({
      title: req.body.title,
      text: req.body.text,
      catId: req.params.id,
    }).then(() => {
      res.json("новость добавлена");
    });
  },
  deleteNews: async (req, res) => {
    await News.findByIdAndDelete(req.params.id);
    res.json("новость удалена");
  },
  patchNews: async (req, res) => {
    await News.findByIdAndUpdate(req.params.id, req.body);
    res.json("новость обновлена");
  },
};
