import express from "express";
import mongoose from "mongoose";
import { connectToDb } from "./database/index.js";
import { Book } from "./model/bookModel.js";
const app = express();
const PORT = 8000;

app.use(express.json()); //postman ma haleko json data yo code halse matra node.js le buhne garxa and undefined audaina

connectToDb();
app.get("/", (req, res) => {
  // res.json("Hello Postman");
  res.status(200).json({ message: "Success" });
});
// Book create system
app.post("/book", async (req, res) => {
  // console.log(req.body);
  // console.log(req.body.bookName); // book ko name matra request garna man lagyo
  const {
    bookName,
    bookPrice,
    isbnNumber,
    authorName,
    publishedAt,
    publication,
  } = req.body;
  console.log("Book Name:", bookName);
  await Book.create({
    bookName: bookName,
    bookPrice: bookPrice,
    isbnNumber: isbnNumber,
    authorName: authorName,
    publishedAt: publishedAt,
    publication: publication,
  });
  res.status(201).json({ message: "Book created Successfully" });
});
//All book read system
app.get("/book", async (req, res) => {
  const books = await Book.find(); //array ma return garxa
  res.status(200).json({
    message: "Book fetched successfully",
    data: books,
  });
});

//single book read system
app.get("/book/:id", async (req, res) => {
  const id = req.params.id;
  const book = await Book.findById(id); //object return garxa
  if (!book) {
    res.status(404).json({ message: "Nothing Found!!" });
  } else {
    res.status(200).json({
      message: "single data fetched successfuly",
      data: book,
    });
  }
});

//delete book operation
app.delete("/book/:id", async (req, res) => {
  const id = req.params.id;
  await Book.findByIdAndDelete(id);
  res.status(200).json({ message: "Book deleted Successfully" });
});

//Update book operation
app.patch("/book/:id", async (req, res) => {
  const id = req.params.id;
  const {
    bookName,
    bookPrice,
    isbnNumber,
    authorName,
    publishedAt,
    publication,
  } = req.body;
  // yasari garda ni bhayo but ramro tarika hoina
  // Book.findByIdAndUpdate(id, req.body);

  await Book.findByIdAndUpdate(id, {
    bookName: bookName,
    bookPrice: bookPrice,
    isbnNumber: isbnNumber,
    authorName: authorName,
    publishedAt: publishedAt,
    publication: publication,
  });
  res.status(200).json({ message: "Book Updated Succesfully!!" });
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
