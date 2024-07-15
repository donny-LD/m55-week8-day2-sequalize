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

    res.status(204).json({ message: "success" });
  } catch (error) {}
};

const deleteAllBooks = async (req, res) => {
  try {
    const deleteBooks = await Books.destroy({
      truncate: true,
    });

    res.status(200).json({ message: "All Books have been deleted." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBook = async (req, res) => {
  const { title } = req.params;
  const updateData = req.body;

  try {
    if (!Object.keys(updateData).length)
      throw new Error("No meaningful update data provided");

    const updatedBook = await Book.findOneAndUpdate(
      { title },
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedBook)
      return res.status(404).json({ message: "Book not found" });

    res
      .status(200)
      .json({ message: "Book updated successfully", book: updatedBook });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
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
  deleteAllBooks: deleteAllBooks,
  updateBook: updateBook,
};
