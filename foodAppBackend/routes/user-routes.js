const express = require("express");
const multer = require("multer");

const router = express.Router();
const usersController = require("../controllers/user-controller");
const { verifyUser, verifyAdmin } = require("../middleware/verify");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./userProfile/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post("/signup", upload.single("picture"), usersController.signup);
router.post("/login", usersController.login);
router.get("/:id", verifyUser, usersController.getUser);

module.exports = router;
