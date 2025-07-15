import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  paymentDate: {
  type: Date,
  default: Date.now
}

}, {
  timestamps: true
});

export default mongoose.model("Payment", paymentSchema);
