

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
  return book;
};
