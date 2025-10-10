import express from "express";
import authMiddleware from "../middlewares/auth.js";
import {
  createTask,
  deleteTask,
  getTaskByID,
  getTasks,
  updateTask,
} from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter
  .route("/gp")
  .get(authMiddleware, getTasks)
  .post(authMiddleware, createTask);

taskRouter
  .route("/:id/gp")
  .get(authMiddleware, getTaskByID)
  .post(authMiddleware, updateTask)
  .delete(authMiddleware, deleteTask);

export default taskRouter;
