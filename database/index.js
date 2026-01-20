import mongoose from "mongoose";
const connectionString = process.env.MONGODB_URI;
export const connectToDb = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to DB Succefully!!");
  } catch (err) {
    console.log("Connection to DB Failed", err.message);
  }
};
