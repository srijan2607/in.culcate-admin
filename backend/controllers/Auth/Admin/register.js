const admin = require("../../../models/admin");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../../../errors");

const register = async (req, res) => {
  try {
    const newUser = await admin.create({ ...req.body });
    const token = await newAdmin.createJWT();
    res.status(StatusCodes.CREATED).json({ user: newUser.getname(), token });
  } catch (error) {
    if (error.name === "ValidationError")
      return res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
  throw error;
};

module.exports = register;
