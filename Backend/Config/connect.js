import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // const URI = process.env.URI;
    await mongoose.connect("mongodb+srv://Rayzen7:zhzj0DmXWKRawxOH@rayzen7.mncnnph.mongodb.net/?retryWrites=true&w=majority&appName=Rayzen7");
    console.log("Connection to MongoDB was successful");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

export default connectDB;