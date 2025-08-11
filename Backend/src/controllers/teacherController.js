const Teacher = require("../models/teacherModel");
const { StatusCodes } = require("http-status-codes");
const mongoose = require("mongoose");
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

const getDashBoard = async (req, res, next) => {
  try {
    const { _id } = req.user;
    console.log(_id);
    if (!isValidObjectId(_id)) {
      const err = new Error("Invalid Object id");
      err.statusCode = StatusCodes.BAD_REQUEST;
      return next(err);
    }
    const teacher = await Teacher.findById(_id).select(
      "-passwordHash -updatedAt -__v -createdAt"
    );
    if (!teacher) {
      const err = new Error("Teacher Not Found");
      err.statusCode = StatusCodes.NOT_FOUND;
      return next(err);
    }
    return res.status(StatusCodes.OK).json({ status: "sucess", teacher });
  } catch (error) {
    return next(error);
  }
};
module.exports = getDashBoard;
