const express = require("express");
const router = express.Router();
const { validate } = require("../middlewares/validationMiddleware");
const { check } = require("express-validator");
const { getTeacherById } = require("../controllers/adminController");
const validationMiddleware = require("../middlewares/authMiddleware");
router.route("/:id").get(validationMiddleware, getTeacherById);

module.exports = router;
