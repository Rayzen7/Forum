import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const URI = process.env.URI;
    await mongoose.connect("mongodb://localhost:27017/mpk_16");
    console.log("Connection to MongoDB was successful");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

export default connectDB;