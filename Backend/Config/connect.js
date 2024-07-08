import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const URI = process.env.URI;
    await mongoose.connect(URI);
    console.log("Connection to MongoDB was successful");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

export default connectDB;