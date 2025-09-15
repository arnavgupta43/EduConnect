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
const uploadRoute = require("./routes/uploadRoute");
const morgan = require("morgan");
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(helmet());
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
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
app.use("/auth", loginRoute);
app.use("/dashboard", dashboradRoute);
app.use("/admin", adminRoutes);
app.use("/upload", uploadRoute);
app.use(ErrorHandler);

module.exports = app;
