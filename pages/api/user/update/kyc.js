import User from "../../../database/models/userSchema";
import connection from "../../../database/connection";

export default async function handler(req, res) {
  // connection();
  if (req.method === "PUT") {
    const user = await User.findOne({ mobile: req.body.mobile });

    if (!user) {
      return next(new ErrorHandler("User not found", 401));
    }

    user.name = req.body.name ? req.body.name : "";
    user.alternate_no = req.body.alternate_no ? req.body.alternate_no : "";
    user.email = req.body.email ? req.body.email : "";

    await user.save();

    res.status(200).json({
      message: "Customer KYC Updated Successfully!",
      success: true,
      user,
    });
  }
}
