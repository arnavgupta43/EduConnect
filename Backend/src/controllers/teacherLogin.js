// controllers/teacherController.js
const Teacher = require("../models/teacherModel");
const { StatusCodes } = require("http-status-codes");

const teacherLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
      const err = new Error("No teacher found with the email");
      err.statusCode = StatusCodes.NOT_FOUND;
      return next(err);
    }

    const validPassword = await te.matchPassword(password);
    if (!validPassword) {
      const err = new Error("Invalid Password");
      err.statusCode = StatusCodes.UNAUTHORIZED;
      return next(err);
    }

    const token = teacher.createJWT();
    return res.status(StatusCodes.OK).json({ status: "success", token });
  } catch (error) {
    return next(error);
  }
};

module.exports = { teacherLogin };
