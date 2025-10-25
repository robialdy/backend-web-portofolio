import multer from "multer";
import path from "path";
import dirname from "../utils/dirname.js";


const uploadPath = path.join(dirname, "../../uploads/image");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage, limits: { fileSize: 2 * 1024 * 1024 } });

export default upload;
