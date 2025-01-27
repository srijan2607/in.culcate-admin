const User = require("../../models/User");
const admin = require("../../models/Admin");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../../errors");

// routes
const getalluserNo = async (req, res) => {
  const users = await user.find({});
  res.status(StatusCodes.OK).json({ Count: users.length });
};
const getalladminNo = async (req, res) => {
    const admins = await admin.find({});
    res.status(StatusCodes.OK).json({ Count: admins.length });
};
// add the count for the articles 
module.exports = { getalluserNo, getalladminNo };