// Inside Routes/Article.js (or wherever your route handler is)
const sendArticle = (req, res) => {
  // Your logic for handling the request
  res.status(200).json({ message: "Article sent" });
};

module.exports = sendArticle;
