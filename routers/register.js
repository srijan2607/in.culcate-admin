// routers/register.js

const express = require("express");
const router = express.Router();
const userRegister = require("../controllers/Auth/user/register");

router.post("/", userRegister);

module.exports = router;
