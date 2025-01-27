// routers/article_long.js

const express = require("express");
const router = express.Router();
const article_long = require("../controllers/Article/Article_long");

router.get("/get_all_the_Article", article_long);
router.patch("/update_article/:id", article_long);
router.post("/create_article", article_long);
router.delete("/delete_article/:id", article_long);

module.exports = router;
