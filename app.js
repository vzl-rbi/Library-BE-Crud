import express from "express";
import mongoose from "mongoose";
import { connectToDb } from "./database/index.js";
const app = express();
const PORT = 8000;

connectToDb();
app.get("/", (req, res) => {
  // res.json("Hello Postman");
  res.status(200).json({ message: "Success" });
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
