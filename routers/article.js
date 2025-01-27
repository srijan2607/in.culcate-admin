// routers/article

const express = require("express");
const router = express.Router();
const article = require("../controllers/Article/Article");

router.get("/get_all_the_Article", article);
router.patch("/update_article/:id", article);
router.post("/create_article", article);
router.delete("/delete_article/:id", article);

module.exports = router;
