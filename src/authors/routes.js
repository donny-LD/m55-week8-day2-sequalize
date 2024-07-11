const { Router } = require("express");
const authorRouter = Router();

const { addAuthor, } = require("./controllers");

// //http://localhost:5001/authors/test
// authorRouter.get("/test", async (req, res) => {
//   res.status(200).json({ massage: " test a ok!" });
// });

//http://localhost:5001/Authors/test
authorRouter.post("/addAuthor", addAuthor);

// authorRouter.get("/getAllAuthors", getAllAuthors);

// authorRouter.delete("/deleteAuthor", deleteAuthor);



module.exports = authorRouter;
