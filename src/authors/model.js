const { DataTypes, STRING } = require("sequelize");

const sequelize = require("../db/connection");
// const { toDefaultValue } = require("sequelize/lib/utils");

const Author = sequelize.define(
  "Author",
  {
   authorName : {
    type: DataTypes.STRING,
    allowNull:false,
    unique: true,
   }
  },
  { timestamps: false }
);

module.exports = Author;
