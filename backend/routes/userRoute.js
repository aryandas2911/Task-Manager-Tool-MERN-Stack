import express from "express";
import {
  getCurrentUser,
  loginUser,
  registerUser,
  updatePassword,
  updateProfile,
} from "../controllers/userController";

const userRouter = express.Router();

//Public links
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

//Private links protected also
userRouter.get("/me", getCurrentUser);
userRouter.put("/profile", updateProfile);
userRouter.put("/password", updatePassword);
