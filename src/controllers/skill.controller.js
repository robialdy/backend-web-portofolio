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
    try {
      await skillDAO.validate(req.body);

      const result = await SkillModel.create(req.body);

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

      const result = await SkillModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

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
