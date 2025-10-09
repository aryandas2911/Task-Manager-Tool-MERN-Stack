import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_here";

export default async function authMiddleware(req, res, next) {
  //grab the token from auth header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startswith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "Not authorized, token missing" });
  }
  const token = authHeader.split(" ")[1];

  //Verify and attack user
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(payload.id).select("-password");
    if (!user) {
      return res.status(401).json({ success: true, message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("JWT Verification failed", error);
    return res
      .status(401)
      .json({ success: true, message: "Token invalid or expired" });
  }
}
