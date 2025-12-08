import mongoose from "mongoose";
const connectionString =
  "mongodb+srv://screwup39_db_user:Lostdb%40688@cluster0.2xhg52u.mongodb.net/?appName=Cluster0"; // URL-encode the @ symbols in password: @ becomes %40

export const connectToDb = async () => {
  await mongoose.connect(connectionString);
  console.log("Connected to DB Succefully!!");
};
