const Author = require("./model");

const addAuthor = async (req, res) => {
  console.log("req.body: ", req.body);
  try {
    // const book = await Book.create({
    //   title: req.body.title,
    //   author: req.body.author,
    //   genre: req.body.genre,
    // });

    const author = await Author.create(req.body);

    res.status(201).json({ message: "success", author: author });
  } catch (error) {
    res.status(500).json({ message: error.massage, error: error });
  }
};

// const getAllAuthors = async (req, res) => {
//   try {
//     const authors = await Author.findAll();

//     res.status(200).json({ message: "success", authors: authors });
//   } catch (error) {
//     res.status(501).json({ message: error.massage, error: error });
//   }
// };
// const deleteAuthor = async (req, res) => {
//   try {
//     const Author = await author.destroy();
//     res.status(200).json({ message: "success", author: author });
//   } catch (error) {
//     res.status(501).json({ message: error.massage, error: error });
//  }

  module.exports = {
    addAuthor: addAuthor,
    // getAllAuthors: getAllAuthors,
    // deleteAuthor: deleteAuthor,
  };
