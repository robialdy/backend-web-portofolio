import { v2 as cloudinary } from "cloudinary";

import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} from "./env.js";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const toDataUrl = (file) => {
  const b64 = Buffer.from(file.buffer).toString("base64");
  const dataUrl = `data:${file.mimetype};base64,${b64}`;

  return dataUrl;
};

const getPublicIdFromFileUrl = (fileUrl) => {
  const fileNameUsingSubString = fileUrl.substring(
    fileUrl.lastIndexOf("/") + 1
  );

  const publicId = fileNameUsingSubString.substring(
    0,
    fileNameUsingSubString.lastIndexOf(".")
  );

  return publicId;
};

export default {
  async uploadSingle(file) {
    const fileDataUrl = toDataUrl(file);

    const result = await cloudinary.uploader.upload(fileDataUrl, {
      resource_type: "auto",
    });
    return result;
  },
  async remove(fileUrl) {
    const publicId = getPublicIdFromFileUrl(fileUrl);

    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  },
};
