const author = require("./model");

const addAuthor = async (req, res) => {
  console.log("req.body: ", req.body);
  try {
    // const book = await Book.create({
    //   title: req.body.title,
    //   author: req.body.author,
    //   genre: req.body.genre,
    // });

    const author = await author.create(req.body);

    res.status(201).json({ message: "success", book: book });
  } catch (error) {
    res.status(501).json({ message: error.massage, error: error });
  }
};

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Book.findAll();

    res.status(200).json({ message: "success", books: books });
  } catch (error) {
    res.status(501).json({ message: error.massage, error: error });
  }
};
const deleteBook = async (req, res) => {
  try {
    const book = await book.destroy();
    res.status(200).json({ message: "success", book: book });
  } catch (error) {
    res.status(501).json({ message: error.massage, error: error });
  }

  module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    deleteBook: deleteBook,
  };
};
