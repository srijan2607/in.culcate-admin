const admin = require("../../models/Admin");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../../errors");

// routes
const getalladmin = async (req, res) => {
  const admins = await admin.find({});
  res.status(StatusCodes.OK).json({ admins });
};

const deleteadmin = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      throw new BadRequestError("Please provide an admin id");
    }
    const deletedAdmin = await admin.findByIdAndDelete(id);
    if (!deletedAdmin) {
      throw new NotFoundError("Admin not found");
    }
    res.status(StatusCodes.NO_CONTENT).end();
  };


module.exports = {getalladmin, deleteadmin};
