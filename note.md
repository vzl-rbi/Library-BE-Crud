# npm i nodemon

# "scripts": {

    "test": "echo \"Error: no test specified\" && exit 1",
    "Rabi": "nodemon app.js"

},

terminal command: npm run Rabi

mongodb+srv://screwup39_db_user:<db_password>@cluster0.2xhg52u.mongodb.net/?appName=Cluster0

2. # mongoose installed
3. # model

# bookModel created for book

and check data for post method
{
"bookName": "The Alchemist",
"bookPrice": 299,
"isbnNumber": 9780061122415,
"authorName": "Paulo Coelho",
"pulishedAt": "1988-01-01"
}

postman request-> raw->
app.post("/book", (req, res) => {
console.log(req.body);
});

# [nodemon] restarting due to changes...

[nodemon] starting `node app.js`
Server running at http://localhost:8000
Connected to DB Succefully!!
undefined

why undefined came?
app.use(express.json()); //yo use garesi undefined audaina

app.use(express.urlencoded({ extended: true }));// yo bhaneko node js mai ejs use gareko bela or laravel ma blade use gareko bela use garnei

3. # model tira banako book singular sadhai books plural banxa. mongodb, xammp

# important note :

Nosql: new column name add garesi migrate garna pardaina afai update hunx

# object ma length check garna pardaina

# array ma length check garna parne hunxa

# CRUD system banaim

4. # multer install gareko to handle file like images, video,docuemnt etc

# file uploaded from postman i.e form-data

# multer code is updated to support only iamge not video, pdf etc file

# node.js le file haru access sajilai didaina so access dina parxa ani matra file herna painxa

app.use(express.static("./storage/"))

app.use(express.static("./")) // never do this //it will show all your privacy or code.

## http://localhost:8000/1765520298380-bulbOn.png

filename = "http://localhost:8000/" + req.file.filename; //localhost rakhda front end lai image name matra iuse garda bhayo

## rest, resful api give you momo, achar, pepsi everything instead of Momo only. To prevent this issue GraphQl is introduced so that only necessary thing is provide to you not everything

# We are comparing REST/RESTful APIs and GraphQL in terms of data fetching. The statement is about the problem of over-fetching and under-fetching

**REST/RESTful API (The Combo Meal Problem):**

- You ask for "Momo" (a specific resource)
- Server gives you: **Momo + Achar + Pepsi + Maybe even a dessert** (all fixed fields)
- You **can't** say "Just Momo, no extras"

**GraphQL (The Custom Order):**

- You ask for "Momo only"
- Server gives you: **Just Momo**
- Or you could say: "Momo + Pepsi, but no Achar"

## cors is installed `npm i cors`

#CORS (Cross-Origin Resource Sharing) is like a security bouncer for websites.

Simple analogy:
Imagine you're at a private party (your website). The bouncer (CORS) checks your ID to see if you're on the guest list. If you're not on the list, you can't come in. Similarly, when your website tries to talk to a different website's API, CORS checks if that other website has given your website permission to access its data.

## import cors from "cors";

app.use(
cors({
origin: "\*",
methods: ["GET", "POST", "PATCH", "DELETE"],
})
);

- use garn paro so vercel sang backend connect hos bhanera natra http://localhost:5173 yo react ko local host sang matra conect bhai rako thiyo vercel ma connect bhayena

## safe and secure process

OPTION 2: PRODUCTION-READY (recommended)
import cors from "cors";

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

## dotenv install for sensitive data to secure in .env and use .gitignore
