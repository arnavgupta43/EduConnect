const express = require("express");
const router = express.Router();
const { adminLogin } = require("../controllers/adminLogin");
const { teacherLogin } = require("../controllers/teacherLogin");
const { validate } = require("../middlewares/validationMiddleware");
const { check } = require("express-validator");
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

module.exports = router;
