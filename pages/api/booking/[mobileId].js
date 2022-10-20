import Booking from "../../database/models/bookingSchema";
import connection from "../../database/connection";

export default async function handler(req, res) {
  connection();

  const bookings = await Booking.findOne({ user_mobile: req.query.mobileId });

  res.status(200).json({ success: true, bookings });
}
