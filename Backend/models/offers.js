import mongoose, { Schema } from "mongoose";

const offerSchema = new mongoose.Schema({
  discount: {
    type: String,
    required: [true, "discount is required"],
  },
  bannerImage: {
    type: String,
    required: [true, "bannerImage is required"],
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "products",
    required: [true, "productId is is required"],
  },
});

const offers = mongoose.model("offers", offerSchema);

export { offer };
