const router = require("express").Router();
const multer = require("multer");
const { uploadImage } = require("../controllers/uploadController");
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});
router.post("/image", upload.single("image"), uploadImage);
module.exports = router;
