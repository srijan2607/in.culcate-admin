const user = require("../../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../../errors");

// routes
const getalluser = async (req, res) => {
  const users = await user.find({}).sort("createdAt");
  res.status(StatusCodes.OK).json({ users });
};

const deleteuser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new BadRequestError("Please provide an user id");
  }
  const deletedUser = await user.findByIdAndDelete(id);
  if (!deletedUser) {
    throw new NotFoundError("User not found");
  }
  res.status(StatusCodes.NO_CONTENT).end();
};

// export the function
module.exports = {getalluser, deleteuser };
