import User from "../../database/models/userSchema";
import connection from '../../database/connection'


export default async function handler(req, res) {
  connection()
  if (req.method === "DELETE") {
    await User.deleteOne({ mobile: req.query.mobileId });

    res.status(200).json({ success: true });
  } else if (req.method === "GET") {
    const user = await User.findOne({ mobile: req.query.mobileId });

    res.status(200).json({ success: true, user });
  }
}
