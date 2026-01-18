# 📚 Library Management API (Node.js + Express + MongoDB)

A beginner-friendly **Library Project** built with **Node.js, Express, MongoDB (Mongoose)** that demonstrates real-world backend concepts like CRUD operations, file uploads, REST APIs, CORS handling, and best practices.

---

## 🚀 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB Atlas**
* **Mongoose**
* **Multer** (file upload)
* **CORS**
* **Nodemon**

---

## 📦 Installation & Setup

```bash
npm install
npm i nodemon mongoose multer cors
```

### Run the project

```bash
npm run Rabi
```

```json
"scripts": {
  "Rabi": "nodemon app.js"
}
```

Server will run at:

```
http://localhost:8000
```

---

## 🔗 MongoDB Connection

Using **MongoDB Atlas**:

```env
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?appName=Cluster0
```

✔ Connected successfully using **Mongoose**

---

## 📘 Book Model (Mongoose)

* MongoDB automatically converts **singular model name → plural collection name**

  * `Book` → `books`

> ⚡ NoSQL advantage: You **don’t need migrations** when adding new fields.

---

## 📮 Create Book (POST API)

### Endpoint

```
POST /book
```

### Postman → Body → raw (JSON)

```json
{
  "bookName": "The Alchemist",
  "bookPrice": 299,
  "isbnNumber": 9780061122415,
  "authorName": "Paulo Coelho",
  "pulishedAt": "1988-01-01"
}
```

### Common Issue: `undefined` in `req.body`

```js
app.post("/book", (req, res) => {
  console.log(req.body); // ❌ undefined
});
```

### ✅ Fix

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

🔹 `express.json()` → for JSON requests (Postman / React)
🔹 `express.urlencoded()` → used when working with **EJS / Blade / forms**

---

## 📂 File Uploads (Multer)

Installed **multer** to handle:

* Images
* Documents

✔ Configured to **allow only images** (no video/pdf)

### Postman

* Body → **form-data**

---

## 🖼 Static File Access

Node.js doesn’t expose files by default.

```js
app.use(express.static("./storage"));
```

### Access uploaded image

```
http://localhost:8000/1765520298380-bulbOn.png
```

⚠️ **Never do this**:

```js
app.use(express.static("./")); // ❌ exposes source code
```

---

## 🌐 Image URL Handling

```js
const filename = "http://localhost:8000/" + req.file.filename;
```

✔ In production, frontend usually needs **only the image name**, not full localhost URL.

---

## 🔁 CRUD System

Implemented full **CRUD operations** for books:

* ✅ Create
* 📖 Read
* ✏️ Update
* ❌ Delete

### Validation Notes

* ❌ Object → no length check
* ✅ Array → length check required

---

## 🍽 REST vs GraphQL (Simple Analogy)

### REST API (Combo Meal Problem)

* You ask for **Momo**
* Server gives: **Momo + Achar + Pepsi + Extras**
* ❌ Over-fetching

### GraphQL (Custom Order)

* You ask: **Only Momo**
* Server gives: **Only Momo**
* ✅ No over / under-fetching

---

## 🔐 CORS Configuration

Installed **CORS** to allow frontend-backend communication.

### Basic (Development)

```js
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);
```

Used when connecting **Vercel frontend** with backend.

---

### ✅ Production-Ready CORS (Recommended)

```js
const allowedOrigins = [
  "http://localhost:5173",
  "https://your-vercel-app.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);
```

🔐 Safe & secure approach for production.

---

## ✅ Key Learnings

* Express body parsers prevent `undefined` issues
* MongoDB auto-handles schema changes
* Multer simplifies file uploads
* Static access must be controlled
* REST APIs can over-fetch data
* CORS is mandatory for frontend-backend integration

---

⭐ If you found this project helpful, don’t forget to **star the repository**!
