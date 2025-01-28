// controllers/auth/admin/login.js

const Admin = require("../../../models/admin");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../../../errors");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const foundAdmin = await admin.findOne({ email });
  if (!foundAdmin) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const token = await foundAdmin.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: foundAdmin.name }, token });
};

module.exports = login;
