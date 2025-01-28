// controllers/home/home.js

const User = require("../../models/User");
const Admin = require("../../models/Admin");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../../errors");

// Controller methods
const getalluserNo = async (req, res) => {
  const users = await User.find({});
  res.status(StatusCodes.OK).json({ Count: users.length });
};

const getalladminNo = async (req, res) => {
  const admins = await Admin.find({});
  res.status(StatusCodes.OK).json({ Count: admins.length });
};

// Export the controller methods
module.exports = { getalluserNo, getalladminNo };