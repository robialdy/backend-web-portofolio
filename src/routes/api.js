import express from "express";
import authController from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import profileController from "../controllers/profile.controller.js";
import skillController from "../controllers/skill.controller.js";
import upload from "../middlewares/upload.middleware.js";
import projectController from "../controllers/project.controller.js";

const router = express.Router();


// AUTH
router.post("/auth/login", authController.login);
router.get("/auth/me", authMiddleware, authController.me);

// PROFILE
router.get("/profile", profileController.findDataUser);
router.put("/profile/:id", authMiddleware, profileController.update);

// SKILL
router.get("/skill", skillController.findAll);
router.post("/skill", [authMiddleware, upload.single("icon")], skillController.create);
router.put("/skill/:id", [authMiddleware, upload.single("icon")], skillController.update);
router.delete("/skill/:id", authMiddleware, skillController.remove);
router.get("/skill/:id", skillController.findOne);

// PROJECT
router.get("/project", projectController.findAll);
router.get("/project/:id", projectController.findOne);
router.post("/project", [authMiddleware, upload.single('image')], projectController.create);
router.put("/project/:id", [authMiddleware, upload.single('image')], projectController.update);
router.delete("/project/:id", authMiddleware, projectController.remove);

// dummy
router.get("/dummy", (req, res) => {
  res.status(200).json({
    meta: {
      status: 200,
      message: "/dummy on hit api",
    },
    data: null,
  });
});

export default router;
