const groupByAuthor = (books) => {
  const authorsList = books.reduce((accumulator, book) => {
    // eslint-disable-next-line no-prototype-builtins
    if (accumulator.hasOwnProperty(book.Author)) {
      accumulator[book.Author].push(book);
    } else {
      accumulator[book.Author] = [book];
    }
    return accumulator;
  }, {});
  return authorsList;
};

module.exports = groupByAuthor;
