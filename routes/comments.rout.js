const { Router } = require("express");
const router = Router();
const { commentsControllers } = require("../controllers/comments.controller");

router.get("/comments/:id", commentsControllers.getComments);
router.post("/comments/:id", commentsControllers.addComment);
router.delete("/comments/:id", commentsControllers.deleteComment);

module.exports = router;
