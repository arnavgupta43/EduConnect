require("dotenv").config(); // 1. Load env first
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const ErrorHandler = require("./middlewares/errorHandler");
const loginRoute = require("./routes/auth");
const dashboradRoute = require("./routes/dashboardRoute");
const adminRoutes = require("./routes/adminRoutes");
const morgan = require("morgan");
app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10000,
  message: {
    status: "Fail",
    msg: "Too many requests, please try again later.",
  },
});
app.use(limiter);
app.use(morgan("combined"));
app.use(express.json()); // parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use("/login", loginRoute);
app.use("/dashboard", dashboradRoute);
app.use("/admin", adminRoutes);
app.use(ErrorHandler);

module.exports = app;
