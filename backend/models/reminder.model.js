import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  dueDate: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model("Reminder", reminderSchema);
