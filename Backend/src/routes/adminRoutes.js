const express = require("express");
const router = express.Router();
const { validate } = require("../middlewares/validationMiddleware");
const { check } = require("express-validator");
const validationMiddleware = require("../middlewares/authMiddleware");
const checkRole = require("../middlewares/checkRoleMiddleware");
const {
  deleteTeacher,
  updateTeacher,
  getTeacherById,
  createTeacher,
} = require("../controllers/adminController");

router
  .route("/:id")
  .get(validationMiddleware, checkRole("admin"), getTeacherById);
router
  .route("/:id")
  .patch(validationMiddleware, checkRole("admin"), updateTeacher);
router
  .route("/:id")
  .delete(validationMiddleware, checkRole("admin"), deleteTeacher);
router
  .route("/create")
  .post(validationMiddleware, checkRole("admin"), createTeacher);
module.exports = router;
