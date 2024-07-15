const { Router } = require("express");
const bookRouter = Router();

const {
  addBook,
  getAllBooks,
  deleteBook,
  getBookByTitle,
  deleteAllBooks,
  updateBook,
} = require("./controllers");



bookRouter.post("/addBook", addBook);

bookRouter.get("/getAllBooks", getAllBooks);

bookRouter.delete("/deleteBook", deleteBook);

bookRouter.delete("/deleteAllBooks", deleteAllBooks);

bookRouter.put("/updateBook", updateBook);

bookRouter.get("/getBookByTitle/:title", getBookByTitle);

bookRouter.
module.exports = bookRouter;
