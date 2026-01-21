// import multer from "multer";

// // Storage setup
// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, "uploads/");
//   },
//   filename: function (req, file, callback) {
//     callback(null, file.originalname); // file নাম original name হবে
//   }
// });

// // Multer instance
// const upload = multer({ storage });

// export default upload;


import multer from "multer";
import path from "path";

// Storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);

    cb(null, uniqueName);
  }
});

// Multer instance
const upload = multer({ storage });

export default upload;

