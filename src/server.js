require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 5001;

const bookRouter = require("./books/routes");

const authorRouter = require("./authors/routes");

const Book = require("./books/model");
const Author = require("./authors/model");
const sequelize = require("./db/connection");

const app = express();

app.use(express.json());

app.use("/books", bookRouter);
app.use("/authors", authorRouter);

const syncTables = async () => {
try{
  Author.hasMany(Book);
  Book.belongsTo(Author);
  
  // Author.belongsToMany(Book,{through:"BookAuthor"});
  // Book.belongsToMany(Author,{through:"BookAuthor"});

    await sequelize.sync({alter: true});


  console.log("All tables synced seccessfully.");

} catch (error) {
  console.error(" Failed to synced tavles", error)
}
//   Book.sync({alter: true});
  // Author.sync({alter: true});
};

app.get("/health", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});

app.listen(port, () => {
  syncTables();
  console.log(`server is listening on port ${port} `);
});
