import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://aryandas2911_db_user:workpilot2025@cluster0.tkoupy2.mongodb.net/WorkPilot"
    )
    .then(() => console.log("Database Connected"));
};
