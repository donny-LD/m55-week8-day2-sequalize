const Author = require ("../authors/model");
const Book = require ("../books/model");

Author.hasMany(Book,{ foreignKey: "authorId"});
Book.belongsTo(Author, { foreignKey: "AuthorId"});

module.exports= { Author, Book};