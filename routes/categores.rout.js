const { Router } = require("express");
const router = Router();
const { categoresControllers } = require("../controllers/categores.controller");

router.get("/categores", categoresControllers.getCats);
router.post("/categores", categoresControllers.addCat);
router.delete("/categores", categoresControllers.deleteCat);

module.exports = router;
