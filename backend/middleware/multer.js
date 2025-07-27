import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  // destination function to specify where to store the files
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // save in "uploads" folder and cb refer to callback function
  },
  // filename function to specify how to name the files
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + "-" + file.fieldname + ext);
  },
});

const upload = multer({ storage });

export default upload;
