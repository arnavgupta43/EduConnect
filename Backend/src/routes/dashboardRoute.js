const express = require("express");
const router = express.Router();
const { validate } = require("../middlewares/validationMiddleware");
const { check } = require("express-validator");
const { AdminDashBoard } = require("../controllers/adminController");
const validationMiddleware = require("../middlewares/authMiddleware");
router.route("/admin").get(validationMiddleware, AdminDashBoard);

module.exports = router;
