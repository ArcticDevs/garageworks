import User from "../../../database/models/userSchema";
import connection from "../../../database/connection";

export default async function handler(req, res) {
  connection();
  if (req.method === "PUT") {
    const user = await User.findOne({ mobile: req.body.mobile });

    if (!user) {
      return next(new ErrorHandler("User not found", 401));
    }

    user.area_pincode = req.body.area_pincode ? req.body.area_pincode : "";
    user.gmap = req.body.gmap ? req.body.gmap : "";

    await user.save();

    res
      .status(200)
      .json({ message: "Address Updated Successfully!", success: true, user });
  }
}
