const { StatusCodes } = require("http-status-codes");
const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const crypto = require("crypto");
const path = require("path");
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

exports.uploadImage = async (req, res, next) => {
  try {
    if (!req.file) {
      const err = new Error("No file uploaded");
      err.statusCode = StatusCodes.NOT_FOUND;
      return next(err);
    }
    if (!req.file.mimetype.startsWith("image/")) {
      const err = new Error("Only Images are allowed");
      err.statusCode = StatusCodes.BAD_REQUEST;
      return next(err);
    }
    const ext = path.extname(req.file.originalname) || "";
    const key = `teachers/${Date.now()}-${crypto.randomUUID()}${ext}`;
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: key,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    };
    await s3.send(new PutObjectCommand(params));
    const url = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
    return res.status(201).json({ status: "success", key, url });
  } catch (error) {
    return next(err);
  }
};
