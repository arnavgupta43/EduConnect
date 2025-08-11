const express = require("express");
const router = express.Router();
const { validate } = require("../middlewares/validationMiddleware");
const { check } = require("express-validator");
const validationMiddleware = require("../middlewares/authMiddleware");
const {
  deleteTeacher,
  updateTeacher,
  getTeacherById,
  createTeacher,
} = require("../controllers/adminController");

router.route("/:id").get(validationMiddleware, getTeacherById);
router.route("/:id").patch(validationMiddleware, updateTeacher);
router.route("/:id").delete(validationMiddleware, deleteTeacher);
router.route("/create").post(validationMiddleware, createTeacher);
module.exports = router;
