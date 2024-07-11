const { DataTypes, STRING } = require("sequelize");

const sequelize = require("../db/connection");
// const { toDefaultValue } = require("sequelize/lib/utils");

const Author = sequelize.define(
  "Author",
  {
    // title: {
    //   type: DataTypes.STRING,
    //   unique: true,
    //   allowNull: false,
    // },
    // author: {
    //   type: DataTypes.STRING,
    //   defaultValue: "written by some author",
    // },
    // genre: {
    //   type: DataTypes.STRING,
    //   defaultValue: "some genre",
    // },
  },
  { timestamps: false }
);

module.exports = Author;
