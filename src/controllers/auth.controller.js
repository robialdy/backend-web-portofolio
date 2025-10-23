import UserModel from "../models/user.model.js";
import { generateToken } from "../utils/jwt.js";

export default {
  async login(req, res) {

    const { email, password } = req.body;

    try {

      const user = await UserModel.findOne({
        email: email
       });
      if (!user) {
        return res.status(404).json({
          meta: {
            status: 403,
            message: "User not found",
          },
          data: null,
        });
      }

      const validatePassword = password === user.password;
      if (!validatePassword) {
        return res.status(404).json({
          meta: {
            status: 403,
            message: "User not found",
          },
          data: null,
        });
      }

      const token = generateToken({
          id: user._id,
      });

      res.status(200).json({
        meta: {
          data: 200,
          message: "User login successfuly"
        },
        data: token,
      });

    } catch (error) {
      res.status(500).json({
        meta: {
          status: 500,
          message: "Login Failed"
        },
        data: null
      });
    }
  },
  async me(req, res) {
    try {

      const user = req.user;
      const result = await UserModel.findById(user?.id);

      res.status(200).json({
        meta: {
          status: 200,
          message: "Success get user profile"
        },
        data: result,
      });

    } catch (error) {}
  },
};
