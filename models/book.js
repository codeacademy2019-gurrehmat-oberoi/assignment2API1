

module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define('book', {
    Author: DataTypes.STRING,
    Id: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    Name: DataTypes.STRING,
  }, {});
  // book.associate = function(models) {
  //   // associations can be defined here
  // };
  book.addBook = bookObject => book.create({
    Id: bookObject.id,
    Name: bookObject.Name,
    Author: bookObject.Author,
    rating: bookObject.rating,
  });
  return book;
};
