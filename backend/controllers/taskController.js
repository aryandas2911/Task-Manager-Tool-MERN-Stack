import Task from "../models/taskModel.js";

//Create new task
export async function createTask(req, res) {
  try {
    const { title, description, priority, dueDate, completed } = req.body;
    const task = new Task({
      title,
      description,
      priority,
      dueDate,
      completed: completed == "Yes" || completed == true,
      owner: req.user.id,
    });
    const saved = await task.save();
    res.status(201).json({ success: true, task: saved });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

//Get all tasks for user
export async function getTasks(req,res){
    try {
        const tasks= await Task.find({owner:req.user.id}).sort({createdAt:-1})
        res.json({ success: true, tasks });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

