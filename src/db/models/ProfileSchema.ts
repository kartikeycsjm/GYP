import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  github: String,
}, { _id: false });

const profileSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: String,
  lastName: String,
  contact: String,
  dob: String,
  city: String,
  gender: String,
  about: String,
  skills: [String],
  projects: [projectSchema],
  links: [String],
}, { timestamps: true });

export default mongoose.models.Profile || mongoose.model("Profile", profileSchema);
