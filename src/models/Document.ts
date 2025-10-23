import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  title: String,
  type: String,
  department: String,
  owner: String,
  effectiveDate: Date,
  expiryDate: Date,
  status: { type: String, default: "Draft" },
  version: { type: Number, default: 1 },
  fileUrl: String,
  prevVersions: [String],
  createdBy: String,
  updatedBy: String,
}, { timestamps: true });

export default mongoose.model("Document", documentSchema);
