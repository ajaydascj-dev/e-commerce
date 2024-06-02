import mongoose, { Schema } from "mongoose";

const paymentModel = new mongoose.Schema(
  {
    orderId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true , 'order id is required'],
    },
    customerId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: [true, "customerId is required"],
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    paymentMethod: {
      type: String,
      enum: [
        "credit_card",
        "debit_card",
        "paypal",
        "bank_transfer",
        "cash_on_delivery",
      ],
      required: [true, "methode is required"],
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    transactionId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const payment = mongoose.model("Payments", paymentModel);

export { payment };
