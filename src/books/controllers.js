const { response } = require("express");
const Book = require("./model");

const addBook = async (req, res) => {
  console.log("req.body: ", req.body);
  try {
    const book = await Book.create(req.body);

    res.status(201).json({ message: "success", book: book });
  } catch (error) {
    res.status(501).json({ message: error.massage, error: error });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();

    res.status(200).json({ message: "success", books: books });
  } catch (error) {
    res.status(501).json({ message: error.massage, error: error });
  }
};
const deleteBook = async (req, res) => {
  try {
    const deleted = await Book.destroy({ where: { title: req.body.title } });

    if (!deleted) {
      res.status(444).json({ message: "some other conditions not met " });
      return;
    }

    // if (!someCondition) {
    //   res.status(555).json({ message: error.massage, error: error });
    //   return;
    // }

    res.status(204).json({ message: "success" });
  } catch (error) {}
};
// await User.destroy({
//   truncate: true,
// });

const updateBook = async (req, res) => {
  try {
    //  const update = await Book.
  } catch (error) {}
};

const getBookByTitle = async (req, res) => {
  try {
    console.log("req.params: ", req.params);

    const book = await Book.findOne({ where: { title: req.params.title } });

    res
      .status(200)
      .json({ message: "success", book: book, params: req.params });
  } catch (error) {
    res.status(501).json({ message: error.massage, error: error });
  }
};

module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
  deleteBook: deleteBook,
  getBookByTitle: getBookByTitle,
};
