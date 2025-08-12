const express = require("express");
const router = express.Router();
const { validate } = require("../middlewares/validationMiddleware");
const { check } = require("express-validator");
const { AdminDashBoard } = require("../controllers/adminController");
const TeacherDashBoard = require("../controllers/teacherController");
const validationMiddleware = require("../middlewares/authMiddleware");
const checkRole = require("../middlewares/checkRoleMiddleware");
router
  .route("/admin")
  .get(validationMiddleware, checkRole("admin"), AdminDashBoard);
router
  .route("/teacher")
  .get(validationMiddleware, checkRole("admin", "teacher"), TeacherDashBoard);
module.exports = router;
