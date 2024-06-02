import mongoose, { Schema } from "mongoose";

const cartModel = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: [true, "userId is required"],
    },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "products",
        },
        quantity: {
          type: Number,
          required: [true, "Quantity is required"],
          min: 1,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const cart = mongoose.model("Cart", cartModel);
