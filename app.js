import express from "express";
import fs from "fs";
import dotenv from "dotenv";
import { connectToDb } from "./database/index.js";
import { Book } from "./model/bookModel.js";
//multerConfig imports
import multer from "multer";
import { storage } from "./middleware/multerConfig.js";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
// Enable CORS for all routes
app.use(cors());
app.use(
  cors({
    origin: "*", //// Allow only my React app oR http://localhost:5173 " or "*""
    method: ["GET", "POST", "PATCH", "DELETE"],
  }),
);
const upload = multer({ storage: storage });

app.use(express.json()); //postman ma haleko json data yo code halse matra node.js le bujhne garxa ani undefined audaina

connectToDb();
app.get("/", (req, res) => {
  // res.json("Hello Postman");
  res.status(200).json({ message: "Success" });
});
// Book create system
app.post("/book", upload.single("image"), async (req, res) => {
  // console.log(req.body);
  // console.log(req.body.bookName); // book ko name matra request
  // garna man lagyo
  console.log(req.file);
  const {
    bookName,
    bookPrice,
    isbnNumber,
    authorName,
    publishedAt,
    publication,
  } = req.body;
  let filename;
  if (!req.file) {
    filename =
      "https://img.freepik.com/free-photo/couple-making-heart-from-hands-sea-shore_23-2148019887.jpg?semt=ais_hybrid&w=740&q=80";
  } else {
    filename = "http://localhost:8000/" + req.file.filename; //localhost rakhda front end lai image name matra iuse garda bhayo
  }
  console.log("Book Name:", bookName);
  await Book.create({
    bookName: bookName,
    bookPrice: bookPrice,
    isbnNumber: isbnNumber,
    authorName: authorName,
    publishedAt: publishedAt,
    publication: publication,
    imageUrl: filename,
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
app.patch("/book/:id", upload.single("image"), async (req, res) => {
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
  const oldDatas = await Book.findById(id);
  let filename;
  if (req.file) {
    // console.log(req.file);
    // console.log(oldDatas);
    const oldImagePath = oldDatas.imageUrl;
    console.log("oldImagePath:", oldImagePath);
    const localHostUrlLength = "http://localhost:8000/".length;
    const newImagepath = oldImagePath.slice(localHostUrlLength);
    console.log("newImagePath:", newImagepath);
    fs.unlink(`storage/${newImagepath}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File Deleted Successfully!!");
      }
    });
    filename = "http://localhost/8000/" + req.file.filename;
  }

  await Book.findByIdAndUpdate(id, {
    bookName: bookName,
    bookPrice: bookPrice,
    isbnNumber: isbnNumber,
    authorName: authorName,
    publishedAt: publishedAt,
    publication: publication,
    imageUrl: filename,
  });
  res.status(200).json({ message: "Book Updated Succesfully!!" });
});
app.use(express.static("./storage/"));

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`),
);
