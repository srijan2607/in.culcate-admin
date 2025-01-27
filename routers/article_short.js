// routers/article_short

const express = require("express");
const router = express.Router();
const article = require("../controllers/Article/Article_short");

router.get("/get_all_the_Article", article);
router.patch("/update_article/:id", article);
router.post("/create_article", article);
router.delete("/delete_article/:id", article);


module.exports = router;
