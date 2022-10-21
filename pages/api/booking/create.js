import Booking from "../../database/models/bookingSchema";
import User from '../../database/models/userSchema'
import connection from "../../database/connection";

export default async function handler(req, res) {
  connection();
  if (req.method === "POST") {
    const user = await User.findOne({ mobile: req.body.mobile });

  const booking = await Booking({
    user_mobile : user.mobile,
    booking_details: req.body.booking_details,
    userInfo:user,
    rate_your_exp: req.body.rate_your_exp,
    self_ins: req.body.self_ins,
  });

  await booking.save();

  res.status(201).json({ message: "Booking Created", success: true, booking });
  }
}
