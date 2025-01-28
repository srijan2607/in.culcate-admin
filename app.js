// app.js

require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const connectDB = require("./db/connect");

// Routes
const registeruser = require("./routers/register");
const adminAuth = require("./routers/admin");
const Authentication = require("./middleware/authentication");
const home = require("./routers/home");
const getallusers = require("./routers/users-list");
const article_short = require("./routers/article_short");
const article_long = require("./routers/article_long");

// Security Packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

// Middleware
app.set("trust proxy", 1);
app.use(rateLimiter({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// Routes Middleware
app.use("/api/admin/v1/auth", adminAuth);
app.use("/api/admin/v1/register", Authentication, registeruser);
app.use("/api/admin/v1/home", Authentication, home);
app.use("/api/admin/v1/users", Authentication, getallusers);
app.use("/api/admin/v1/short_article", Authentication, article_short);
app.use("/api/admin/v1/long_article", Authentication, article_long);

// Server Port
const port = process.env.PORT || 6000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.error(error);
  }
};

start();
