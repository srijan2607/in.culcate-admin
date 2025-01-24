const admin = require("../../../models/admin");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../../../errors");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const founduser = await admin.findOne({ email });
  if (!founduser) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const token = await foundAdmin.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: founduser.name }, token });
};

module.exports = login;
