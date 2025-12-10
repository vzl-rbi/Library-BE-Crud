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
