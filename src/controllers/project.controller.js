import ProjectModel, { projectDAO } from "../models/project.model.js";
import path from "path";
import fs from "fs";
import dirname from "../utils/dirname.js";

export default {
  async findAll(req, res) {
    try {
      const result = await ProjectModel.find();

      res.status(200).json({
        meta: {
          status: 200,
          message: "Success get all project",
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

      const result = await ProjectModel.findById(id);

      res.status(200).json({
        meta: {
          status: 200,
          message: "Success get all project",
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
      const { technologies, ...data } = req.body;

      // diubah apabila string
      const techn =
        typeof technologies === "string"
          ? technologies.split(",").map((t) => t.trim())
          : technologies;

      await projectDAO.validate({ ...data, technologies: techn });

      const result = await ProjectModel.create({
        ...data,
        technologies: techn,
      });

      res.status(200).json({
        meta: {
          status: 200,
          message: "Successfuly create project",
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
      const { technologies, ...data } = req.body;

      // diubah apabila string
      const techn =
        typeof technologies === "string"
          ? technologies.split(",").map((t) => t.trim())
          : technologies;

      const result = await ProjectModel.findByIdAndUpdate(
        id,
        { ...data, technologies: techn },
        { new: true }
      );

      res.status(200).json({
        meta: {
          status: 200,
          message: "Successfuly update project",
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
      const result = await ProjectModel.findByIdAndDelete(id, { new: true });

      res.status(200).json({
        meta: {
          status: 200,
          message: "Successfuly delete project",
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
