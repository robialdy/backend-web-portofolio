import CertificatesModel, {
  certificatesDAO,
} from "../models/certificates.model.js";

export default {
  async findAll(req, res) {
    try {
      const result = await CertificatesModel.find();

      res.status(200).json({
        meta: {
          status: 200,
          message: "Successfuly get all certificates",
        },
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        meta: {
          status: 500,
          message: error,
        },
      });
    }
  },
  async create(req, res) {
    try {

      await certificatesDAO.validate(req.body);

      const result = await CertificatesModel.create(req.body);

      res.status(200).json({
        meta: {
          status: 200,
          message: "Successfuly create certificates",
        },
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        meta: {
          status: 500,
          message: error,
        },
      });
    }
  },
  async findOne(req, res) {
    try {
      const { id } = req.params;

      const result = await CertificatesModel.findById(id);

      res.status(200).json({
        meta: {
          status: 200,
          message: "Successfuly get one certificates",
        },
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        meta: {
          status: 500,
          message: error,
        },
      });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;

      const result = await CertificatesModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res.status(200).json({
        meta: {
          status: 200,
          message: "Successfuly update certificates",
        },
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        meta: {
          status: 500,
          message: error,
        },
      });
    }
  },
  async remove(req, res) {
    try {
      const { id } = req.params;

      const result = await CertificatesModel.findByIdAndDelete(id, req.body, {
        new: true,
      });

      res.status(200).json({
        meta: {
          status: 200,
          message: "Successfuly remove certificates",
        },
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        meta: {
          status: 500,
          message: error,
        },
      });
    }
  },
};
