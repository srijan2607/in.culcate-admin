// routers/admin

const express = require("express");
const router = express.Router();
const login = require("../controllers/Auth/Admin/login");
const register = require("../controllers/Auth/Admin/register");
const logout = require("../controllers/Auth/Admin/logout");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);


module.exports = router;
