const Author = require("./model");
const Book = require("../books/model");

const addAuthor = async (req, res) => {
  console.log("req.body: ", req.body);
  try {
    const author = await Author.create(req.body);

    res.status(201).json({ message: "success", author: author });
  } catch (error) {
    res.status(500).json({ message: error.massage, error: error });
  }
};

const getAuthorAndBooks = async (req, res) => {
  try {
    const author = await Author.findOne({
      where: { authorName: req.params.authorName },
      include: Book,
    });
    res.status(200).json({ message: "success", author: author });
  } catch (error) {
    res.status(500).json({ message: error.massage, error: error });
  }
};

module.exports = {
  addAuthor: addAuthor,
  getAuthorAndBooks: getAuthorAndBooks,
};
