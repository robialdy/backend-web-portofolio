import express from "express";
import authController from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import profileController from "../controllers/profile.controller.js";
import skillController from "../controllers/skill.controller.js";
import projectController from "../controllers/project.controller.js";
import certificatesController from "../controllers/certificates.controller.js";
import messageController from "../controllers/message.controller.js";
import mediaMiddleware from "../middlewares/media.middleware.js";
import mediaController from "../controllers/media.controller.js";

const router = express.Router();


// AUTH
router.post("/auth/login", authController.login);
router.get("/auth/me", authMiddleware, authController.me);

// PROFILE
router.get("/profile", profileController.findDataUser);
router.put("/profile/:id", authMiddleware, profileController.update);

// SKILL
router.get("/skill", skillController.findAll);
router.post("/skill", authMiddleware, skillController.create);
router.put("/skill/:id", authMiddleware, skillController.update);
router.delete("/skill/:id", authMiddleware, skillController.remove);
router.get("/skill/:id", skillController.findOne);

// PROJECT
router.get("/project", projectController.findAll);
router.get("/project/:id", projectController.findOne);
router.post("/project", authMiddleware, projectController.create);
router.put("/project/:id", authMiddleware, projectController.update);
router.delete("/project/:id", authMiddleware, projectController.remove);

// CERTIFICATES
router.get("/certificates", certificatesController.findAll);
router.get("/certificates/:id", certificatesController.findOne);
router.post("/certificates", authMiddleware, certificatesController.create);
router.put("/certificates/:id", authMiddleware, certificatesController.update);
router.delete("/certificates/:id", authMiddleware, certificatesController.remove);

// MESSSAGE
router.get("/message", authMiddleware, messageController.findAll);
router.post("/message", messageController.create);
router.delete("/message/:id", authMiddleware, messageController.remove);

// MEDIA
router.post("/media/upload-single", [authMiddleware, mediaMiddleware.single("file")], mediaController.single);
router.delete("/media/remove", authMiddleware, mediaController.remove);

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
