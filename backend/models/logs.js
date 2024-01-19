const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["login", "logout", "create", "update", "delete"],
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Log", logSchema);
