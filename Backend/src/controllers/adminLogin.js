const Admin = require("../models/adminModel");
const { StatusCodes } = require("http-status-codes");

const adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      const err = new Error("Invalid Credentials");
      err.statusCode = StatusCodes.NOT_FOUND;
      return next(err);
    }

    const validPassword = await admin.matchPassword(password);
    if (!validPassword) {
      const err = new Error("Invalid Credentials");
      err.statusCode = StatusCodes.UNAUTHORIZED;
      return next(err);
    }

    const token = admin.createJWT();
    return res.status(StatusCodes.OK).json({ status: "success", token });
  } catch (error) {
    return next(error);
  }
};

module.exports = { adminLogin };
