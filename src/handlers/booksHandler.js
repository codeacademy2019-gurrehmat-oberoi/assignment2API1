const axios = require('axios');

const groupByAuthor = require('../utils/groupByAuthor');

const booksHandler = async () => {
  const response = await axios({
    method: 'get',
    url: 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks',
  });
  const booksResult = response.data.books;
  for (let index = 0; index < booksResult.length; index += 1) {
    // eslint-disable-next-line no-await-in-loop
    const bookRating = await axios({
      method: 'get',
      url: `https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${booksResult[index].id}`,
    });
    booksResult[index] = Object.assign(booksResult[index], bookRating.data);
    console.log(booksResult);
    if (index === booksResult.length - 1) {
      return groupByAuthor(booksResult);
    }
  }
};

module.exports = { booksHandler };
