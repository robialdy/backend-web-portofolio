import SkillModel, { skillDAO } from "../models/skill.model.js";
import dirname from "../utils/dirname.js";
import path from "path";
import fs from "fs";

export default {
  async findAll(req, res) {
    try {
      const result = await SkillModel.find();

      res.status(200).json({
        meta: {
          status: 200,
          message: "Success get all skill data",
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
  async findOne(req, res) {
    try {
      const { id } = req.params;

      const result = await SkillModel.findById(id);
      if (!result) {
        return res.status(404).json({
          meta: {
            status: 404,
            message: "Skill not found",
          },
          data: result,
        });
      }

      res.status(200).json({
        meta: {
          status: 200,
          message: "Succest find one skill",
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
    const { name, category } = req.body;
    const icon = req.file ? req.file.filename : "default.jpg";

    try {
      await skillDAO.validate({ name, category, icon });

      const result = await SkillModel.create({ name, category, icon });

      res.status(200).json({
        meta: {
          status: 200,
          message: "Success create skill",
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
  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, category } = req.body;

      const skill = await SkillModel.findById(id);
      if (!skill) {
        return res.status(404).json({
          meta: {
            status: 404,
            message: "Skill not found",
          },
          data: null,
        });
      }

      let icon = skill.icon;
      if (req.file) {
        icon = req.file.filename;

        // hapus icon lama
        const oldIcon = path.join(dirname, "../../uploads/image", skill.icon);
        if (fs.existsSync(oldIcon)) {
          fs.unlinkSync(oldIcon);
        }
      }

      const result = await SkillModel.findByIdAndUpdate(
        id,
        { name, category, icon },
        { new: true }
      );

      res.status(200).json({
        meta: {
          status: 200,
          message: "Update skill successfuly",
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
      const skill = await SkillModel.findById(id);
      if (!skill) {
        res.status(404).json({
          meta: {
            status: 404,
            message: "Skill not found",
          },
          data: null,
        });
      }

      // hapus icon lama
      const oldIcon = path.join(dirname, "../../uploads/image", skill.icon);
      if (fs.existsSync(oldIcon)) {
        fs.unlinkSync(oldIcon);
      }

      const result = await SkillModel.findByIdAndDelete(id, { new: true });

      res.status(200).json({
        meta: {
          status: 200,
          message: "Remove skill successfuly",
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
