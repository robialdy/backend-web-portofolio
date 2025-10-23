import express from "express";
import authController from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();


// AUTH
router.post("/auth/login", authController.login);
router.get("/auth/me", authMiddleware, authController.me);



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
