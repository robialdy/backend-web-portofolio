import express from "express";
import authController from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import profileController from "../controllers/profile.controller.js";

const router = express.Router();


// AUTH
router.post("/auth/login", authController.login);
router.get("/auth/me", authMiddleware, authController.me);

// PROFILE
router.get("/profile", profileController.findDataUser);
router.put("/profile/:id", authMiddleware, profileController.update);



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
