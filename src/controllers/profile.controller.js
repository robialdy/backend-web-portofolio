import UserModel from "../models/user.model.js";

export default {
  async findDataUser(req, res) {
    try {
      const user = await UserModel.findById("68f995a012b2cf1e5e595c14");

      res.status(200).json({
        meta: {
          status: 200,
          message: "Success get user profile",
        },
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        meta: {
          status: 500,
          message: "failed get user profile",
        },
        data: error,
      });
    }
  },
  async update(req, res) {
    try {

        const {id} = req.params;

        const result = await UserModel.findByIdAndUpdate(id, req.body, {new: true});

        res.status(200).json({
            meta: {
                status: 200,
                message: "Succes update user profile",
            },
            data: result
        });

    } catch (error) {
      res.status(500).json({
        meta: {
          status: 500,
          message: "failed update user profile",
        },
        data: null,
      });
    }
  },
};
