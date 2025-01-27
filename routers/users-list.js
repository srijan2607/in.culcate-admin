// routers/users-list.js
const express = require("express");
const router = express.Router();
const users = require("../controllers/user-panel/users")
const admins = require("../controllers/user-panel/admins")

router.get("/users", users);
router.delete("/users/:id", users)
router.get("/admins", admins);
router.delete("/admins/:id", admins)

module.exports = router;
