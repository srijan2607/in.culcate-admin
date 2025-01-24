const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { required } = require("joi");

const UserSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
    default: uuidv4(),
  },
  name: {
    type: String,
    maxlength: 50,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
});

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  if (!process.env.JWT_SECRET || !process.env.JWT_LIFETIME) {
    throw new Error("JWT_SECRET or JWT_LIFETIME is not set.");
  }
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
};

UserSchema.methods.comparePassword = async function (givenPassword) {
  return bcrypt.compare(givenPassword, this.password);
};
UserSchema.methods.getname = function () {
  return this.name;
};

module.exports = mongoose.model("User", UserSchema);
