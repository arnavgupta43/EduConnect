const Teacher = require("../models/teacherModel");
const { StatusCodes } = require("http-status-codes");
const mongoose = require("mongoose");
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);
const AdminDashBoard = async (req, res, next) => {
  try {
    const page = Math.max(parseInt(req.query.page || "1", 10), 1);
    const limit = Math.min(
      Math.max(parseInt(req.query.limit || "20", 10), 1),
      100
    );
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      Teacher.find({})
        .select("-passwordHash -updatedAt -__v")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Teacher.countDocuments(),
    ]);
    return res.status(StatusCodes.OK).json({
      status: "success",
      total,
      page,
      pages: Math.ceil(total / limit),
      teachers: items,
    });
  } catch (error) {
    return error;
  }
};

const createTeacher = async (req, res, next) => {
  try {
    console.log("Incoming request body:", req.body);
    const {
      username,
      name,
      email,
      password,
      age,
      mobileNo,
      address,
      image,
      previousExperience,
      researchInterests,
      publications,
    } = req.body;
    if (!username || !name || !email || !password || !age || !mobileNo) {
      const err = new Error("Insuffienct details");
      err.statusCode = StatusCodes.BAD_REQUEST;
      return next(err);
    }
    const checkUniqueness = await Teacher.findOne({
      $or: [{ email }, { username }],
    });
    if (checkUniqueness) {
      const err = new Error("Username/Email already exits");
      err.statusCode = StatusCodes.CONFLICT;
      return next(err);
    }
    const profile = {
      photo: image,
      age: parseInt(req.body.age, 10),
      mobileNo,
      address,
      previousExperience,
      researchInterests,
      publications,
    };

    const new_Teacher = await Teacher.create({
      username,
      name,
      email,
      passwordHash: password,
      profile,
    });
    if (!new_Teacher) {
      const err = new Error("Unable to create new Teacher");
      err.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
      return next(err);
    }
    const teacherObj = new_Teacher.toObject();
    delete teacherObj.passwordHash;
    return res
      .status(StatusCodes.CREATED)
      .json({ status: "success", teacher: teacherObj });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const getTeacherById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      const err = new Error("Invalid object Id");
      err.statusCode = StatusCodes.BAD_REQUEST;
      return next(err);
    }
    const teacher = await Teacher.findById(id).select("-passwordHash");
    if (!teacher) {
      const err = new Error("Teacher Not Found");
      err.statusCode = StatusCodes.NOT_FOUND;
      return next(err);
    }
    return res.status(StatusCodes.OK).json({ status: "success", teacher });
  } catch (error) {
    return next(error);
  }
};

// PATCH /api/admin/teacher/:id
const updateTeacher = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      const err = new Error("Invaild ObjectId");
      err.statusCode = StatusCodes.BAD_REQUEST;
      return next(err);
    }
    const {
      username,
      name,
      email,
      password,
      age,
      mobileNo,
      address,
      photo,
      previousExperience,
      researchInterests,
      publications,
    } = req.body;

    const update = {};
    if (username) update.username = username;
    if (name) update.name = name;
    if (email) update.email = email;
    if (password) update.passwordHash = await bcrypt.hash(password, 10);
    if (age !== undefined) update["profile.age"] = age;
    if (mobileNo !== undefined) update["profile.mobileNo"] = mobileNo;
    if (address !== undefined) update["profile.address"] = address;
    if (photo !== undefined) update["profile.photo"] = photo;
    if (previousExperience !== undefined)
      update["profile.previousExperience"] = previousExperience;
    if (Array.isArray(researchInterests))
      update["profile.researchInterests"] = researchInterests;
    if (Array.isArray(publications))
      update["profile.publications"] = publications;

    const teacher = await Teacher.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
    }).select("-passwordHash");

    if (!teacher)
      return next(
        Object.assign(new Error("Teacher Not Found"), { statusCode: 404 })
      );
    res.json({ status: "success", teacher });
  } catch (err) {
    next(err);
  }
};

const deleteTeacher = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      const err = new Error("Invalid ObjectId");
      err.statusCode = StatusCodes.BAD_REQUEST;
      return next(err);
    }
    const deleted = await Teacher.findByIdAndDelete(id);
    if (!deleted) {
      const err = new Error("Teacher not found");
      err.statusCode = StatusCodes.NOT_FOUND;
      return next(err);
    }
    return res.status(StatusCodes.OK).json({ status: "success" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  AdminDashBoard,
  createTeacher,
  updateTeacher,
  deleteTeacher,
  getTeacherById,
};

// {
//     "username":"dummyOne",
//     "name":"dummy",
//     "email":"dummy@gmail.com",
//     "password":"password123",
//     "age":"19",
//     "mobileNo":"0384833",
//     "address":"kengeri",
//     "photo":"",
//     "previousExperience":[
//         "mysore","kolkata"
//     ],
//     "researchInterests":[
//         "chemistry", "physics"
//     ],
//     "publications":[
//         "spinger","googleScholar"
//     ]

// }
