import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const connectDB = async () => {
  try {
    // const URI = process.env.URI;
    await mongoose.connect("mongodb://Rayzen7:zhzj0DmXWKRawxOH@ac-dob53so-shard-00-00.mncnnph.mongodb.net:27017,ac-dob53so-shard-00-01.mncnnph.mongodb.net:27017,ac-dob53so-shard-00-02.mncnnph.mongodb.net:27017/?ssl=true&replicaSet=atlas-7pnjfm-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Rayzen7");
    console.log("Connection to MongoDB was successful");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

export default connectDB;