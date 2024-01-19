const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Department", departmentSchema);
