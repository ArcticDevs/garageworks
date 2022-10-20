const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user_mobile:String,
  booking_details: {},
  userInfo:{},
  rate_your_exp: {
    type: String,
    trim: true,
  },
  self_ins: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.Booking ||  mongoose.model("Booking", bookingSchema);
