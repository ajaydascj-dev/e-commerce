import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("Databse is connected");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { connectDb };
