import User from "../../database/models/userSchema";
import connection from "../../database/connection";

export default async function handler(req, res) {
  connection();
  if (req.method === "POST") {
    const user = await User.findOne({ mobile: req.body.mobile });

    if (!user) {
      return res.status(401).json({
        message: "User not registered. Please sign up.",
        success: false,
        user,
      });
    }

    res.status(201).json({
      message: "User Logged in successfully",
      success: true,
      user,
    });
  }
}
