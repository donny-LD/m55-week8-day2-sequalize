const Author = require("./model");

const addAuthor = async (req, res) => {
  console.log("req.body: ", req.body);
  try {
 

    const author = await Author.create(req.body);

    res.status(201).json({ message: "success", author: author });
  } catch (error) {
    res.status(500).json({ message: error.massage, error: error });
  }
};



  module.exports = {
    addAuthor: addAuthor,
  };
