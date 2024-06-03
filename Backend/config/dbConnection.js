import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("Databse is connected");
    return "connected";
  } catch (error) {
    console.log(error);
    return;
  }
};

export { connectDb };
