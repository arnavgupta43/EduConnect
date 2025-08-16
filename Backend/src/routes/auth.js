const express = require("express");
const router = express.Router();
const { adminLogin } = require("../controllers/adminLogin");
const { teacherLogin } = require("../controllers/teacherLogin");
const { validate } = require("../middlewares/validationMiddleware");
const { check } = require("express-validator");
const {
  verifyTeacher,
  verifyAdmin,
} = require("../controllers/verifyController");
const validationMiddleware = require("../middlewares/authMiddleware");
router
  .route("/teacher")
  .post(
    [
      check("email")
        .isEmail()
        .notEmpty()
        .withMessage("Email must be provided")
        .bail(),
      check("password").notEmpty().withMessage("Passeord must be provided"),
    ],
    validate,
    teacherLogin
  );
router
  .route("/admin")
  .post(
    [
      check("email")
        .isEmail()
        .notEmpty()
        .withMessage("Email must be provided")
        .bail(),
      check("password").notEmpty().withMessage("Password must be provided"),
    ],
    validate,
    adminLogin
  );
router.route("/verifyTeacher").get(validationMiddleware, verifyTeacher);
router.route("/verifyAdmin").get(validationMiddleware, verifyAdmin);
module.exports = router;
