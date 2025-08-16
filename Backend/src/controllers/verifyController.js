const Teacher = require("../models/teacherModel");
const Admin = require("../models/adminModel");

const verifyTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.user._id).select("-password");

    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found." });
    }

    res.status(200).json({
      message: "Token verified successfully",
      user: teacher,
    });
  } catch (error) {
    console.error("Verification failed:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const verifyAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.user._id).select("-password");

    if (!admin) {
      return res.status(404).json({ message: "admin not found." });
    }

    res.status(200).json({
      message: "Token verified successfully",
      user: admin,
    });
  } catch (error) {
    console.error("Verification failed:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { verifyTeacher, verifyAdmin };
