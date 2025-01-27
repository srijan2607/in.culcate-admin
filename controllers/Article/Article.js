// controllers/article/article.js

const sendArticle = (req, res) => {
  // Your logic for handling the request
  res.status(200).json({ message: "Article sent" });
};

module.exports = sendArticle;
