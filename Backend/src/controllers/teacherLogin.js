// controllers/teacherController.js
const Teacher = require("../models/teacherModel");
const { StatusCodes } = require("http-status-codes");

const teacherLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
      const err = new Error("Invalid Credentials");
      err.statusCode = StatusCodes.NOT_FOUND;
      return next(err);
    }

    const validPassword = await teacher.matchPassword(password);
    if (!validPassword) {
      const err = new Error("Invalid Credentials");
      err.statusCode = StatusCodes.UNAUTHORIZED;
      return next(err);
    }

    const token = teacher.createJWT();
    return res.status(StatusCodes.OK).json({
      status: "success",
      user: {
        email:email,
        name: teacher.name,
        role: "teacher",
        id: teacher._id,
      },
      token,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { teacherLogin };
