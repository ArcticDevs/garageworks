import User from "../../database/models/userSchema";
import connection from '../../database/connection'


export default async function handler(req, res) {
  connection()
  if (req.method === "POST") {
    const user = await User.findOne({ mobile: req.body.mobile });

    if (user) {
      res
        .status(200)
        .json({
          message: "Mobile number already exists, please try logging in",
          success: false,
          user,
        });
    } else {
      const user = new User(req.body);

      await user.save();

      res.status(201).json({ message: "User Created", success: true, user });
    }
  }
}
