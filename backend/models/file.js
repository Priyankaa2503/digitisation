const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
    // department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
    storageSize: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("File", fileSchema);
