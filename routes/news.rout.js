const { Router } = require("express");
const router = Router();
const { newsControllers } = require("../controllers/news.controller");

router.get("/news", newsControllers.getNews);
router.post("/news/:id", newsControllers.addNews);
router.get("/news:id", newsControllers.getByIdNews);
router.get("/news/cat:id", newsControllers.getByCatNews);
router.patch("/news:id", newsControllers.patchNews);
router.delete("/news:id", newsControllers.deleteNews);

module.exports = router;
