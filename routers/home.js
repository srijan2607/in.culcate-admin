// routers/home.js

const express = require("express");
const router = express.Router();
const { getalluserNo, getalladminNo } = require("../controllers/Home/home");

router.get("/users-count", getalluserNo);
router.get("/admins-count", getalladminNo);

module.exports = router;
