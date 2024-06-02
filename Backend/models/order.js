import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    cartId: {
      type: Schema.Types.ObjectId,
      ref: "cart",
      required: true,
    },
    orderStatus: {
      type: String,
      enum: ["pending", "processed", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    deliveryAddress: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const order = mongoose.model("Order", orderSchema);
