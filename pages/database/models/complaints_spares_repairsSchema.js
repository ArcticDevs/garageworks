const mongoose = require("mongoose");

const complaintsSparesRepairsSchema = new mongoose.Schema({
  user_mobile:{
    type: String,
    required: [true, "Please Enter Your Mobile Number"],
    unique: true,
    trim: true,
  },
  complaints: {
    type: String,
    trim: true,
    default:"-"
  },
  spares: {
    type: String,
    trim: true,
    default:"-"
  },
  labour_repairs: {
    type: String,
    trim: true,
    default:"-"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.ComplaintsSparesRepairs || mongoose.model("ComplaintsSparesRepairs", complaintsSparesRepairsSchema);
