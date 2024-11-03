const multer = require("multer");
const path = require("path");

const profileFolderPath = path.join(__dirname, "../public/profiles/");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, profileFolderPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() +
      Math.round(Math.random() * 1e9) +
      "." +
      file.mimetype.split("/")[1];
    cb(null, uniqueSuffix);
  },
});
const upload = multer({ storage });

module.exports = upload;
