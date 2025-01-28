// controllers/Auth/Admin/logout.js

const { StatusCodes } = require("http-status-codes");

const logout = (req, res) => {
  res.clearCookie("token"); 
  res.status(StatusCodes.OK).json({ msg: "Logout successful" });
};

module.exports = logout;