const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      postalCode: String,
    },
    // departments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Department" }],
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
    owner: {
      name: String,
      contact: String,
      email: String,
    },
    logs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Log" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", companySchema);
