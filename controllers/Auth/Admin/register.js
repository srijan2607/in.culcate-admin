// controllers/auth/admin/register.js

// controllers/Auth/Admin/register.js

const admin = require("../../models/admin");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  try {
    const newAdmin = await admin.create({ ...req.body });
    const token = newAdmin.createJWT();
    return res
      .status(StatusCodes.CREATED)
      .json({ user: newAdmin.getname(), token });
  } catch (error) {
    // Check if it's a duplicate key error for email
    if (error.code === 11000 && error.keyValue && error.keyValue.email) {
      // Handle the duplicate email case
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: `Email ${error.keyValue.email} is already registered.` });
    }
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: error.message });
  }
};

module.exports = register;
