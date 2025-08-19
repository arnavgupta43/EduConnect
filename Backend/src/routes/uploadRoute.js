const router = require("express").Router();
const multer = require("multer");
const { uploadImage } = require("../controllers/uploadController");
const checkRole = require("../middlewares/checkRoleMiddleware");
const validationMiddleware = require("../middlewares/authMiddleware");
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});
router.post(
  "/image",
  validationMiddleware,
  checkRole("admin"),
  upload.single("image"),
  uploadImage
);
module.exports = router;
