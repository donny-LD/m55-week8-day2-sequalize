const { Router } = require("express");
const bookRouter = Router();


const {addBook, getAllBooks, deleteBook} = require("./controllers")
 
// //http://localhost:5001/books/test
// bookRouter.get("/test", async (req,res) => {
//     res.status(200).json({massage: " test a ok!" });
// });

//http://localhost:5001/books/test
bookRouter.post("/addBook",addBook);


bookRouter.get("/getAllBooks", getAllBooks);

bookRouter.delete("/delleteBook", deleteBook);




module.exports = bookRouter;