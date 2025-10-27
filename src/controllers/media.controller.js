import uploader from "../utils/uploader.js";

export default {
  async single(req, res) {
    if (!req.file) {
      return res.status(400).json({
        meta: {
          status: 400,
          message: "File is not exist",
        },
        data: null,
      });
    }

    try {
      const result = await uploader.uploadSingle(req.file);

      res.status(200).json({
        meta: {
          status: 200,
          message: "Success upload file",
        },
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        meta: {
          status: 500,
          message: error,
        },
        data: null,
      });
    }
  },
  async remove(req, res) {
    try {

        const {fileUrl} = req.body;
        const result = await uploader.remove(fileUrl);

        res.status(200).json({
            meta: {
                status: 200,
                message: "Success remove file"
            },
            data: result,
        });

    } catch (error) {
      res.status(500).json({
        meta: {
          status: 500,
          message: error,
        },
        data: null,
      });
    }
  },
};
