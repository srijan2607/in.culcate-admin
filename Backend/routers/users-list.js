// routers/users-list.js
const express = require("express");
const router = express.Router();
const {
  getalladmin,
  deleteadmin,
} = require("../controllers/user-panel/admins");
const { getalluser, deleteuser } = require("../controllers/user-panel/users");

router.get("/users", getalluser);
router.delete("/users/:id", deleteuser);
router.get("/admins", getalladmin);
router.delete("/admins/:id", deleteadmin);

module.exports = router;
