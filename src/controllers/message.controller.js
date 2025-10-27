import MessageModel, { messageDAO } from "../models/message.model.js";

export default {
  async findAll(req, res) {
    try {
      const result = await MessageModel.find();

      res.status(200).json({
        meta: {
          status: 200,
          message: "Successuly get data message",
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
  async create(req, res) {
    try {
      await messageDAO.validate(req.body);

      const result = await MessageModel.create(req.body);

      res.status(200).json({
        meta: {
          status: 200,
          message: "Successfuly create message",
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
      const { id } = req.params;

      const result = await MessageModel.findByIdAndDelete(id, { new: true });

      res.status(200).json({
        meta: {
          status: 200,
          message: "Successfuly delete message",
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
