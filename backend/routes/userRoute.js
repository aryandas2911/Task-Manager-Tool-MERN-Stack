import express from "express";
import {
  getCurrentUser,
  loginUser,
  registerUser,
  updatePassword,
  updateProfile,
} from "../controllers/userController";
import authMiddleware from "../middlewares/auth";

const userRouter = express.Router();

//Public links
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

//Private links protected also
userRouter.get("/me", authMiddleware, getCurrentUser);
userRouter.put("/profile", authMiddleware, updateProfile);
userRouter.put("/password", authMiddleware, updatePassword);
