import User from '../../../../database/models/userSchema'
import CSRmodel from '../../../../database/models/complaints_spares_repairsSchema'
import connection from "../../../../database/connection"

export default async function handler(req, res) {
  connection();
  if (req.method === "PUT") {
    const user = await User.findOne({ mobile: req.body.mobile });

    if (!user) {
      return next(new ErrorHandler("User not found", 401));
    }

    let csr = await CSRmodel.findOne({ mobile: req.body.mobile });

    //if a complaint for the mobile number is not present then we will create a new one else we will update the already present one
    if (!csr) {
      csr = await CSRmodel({
        user_mobile: req.body.mobile,
        complaints: req.body.complaints,
        spares: req.body.spares,
        labour_repairs: req.body.labour_repairs,
      });
    } else {
      csr.complaints = req.body.complaints ? req.body.complaints : "";
      csr.spares = req.body.spares ? req.body.spares : "";
      csr.labour_repairs = req.body.labour_repairs
        ? req.body.labour_repairs
        : "";
    }

    await csr.save();

    res
      .status(200)
      .json({ message: "Updated Successfully!", success: true, csr });
  }
}
