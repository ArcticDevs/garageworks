const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  mobile: {
    type: String,
    required: [true, "Please Enter Your Mobile Number"],
    unique: true,
    trim: true,
    minLength:[10,"Invalid Mobile Number"],
    maxLength:[10,"Invalid Mobile Number"]
  },
  coupon: {
    type: String,
    trim: true,
    default: ""
  },
  name: {
    type: String,
    trim: true,
  },
  alternate_no: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  area_pincode: {
    type: String,
    trim: true,
  },
  gmap: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
