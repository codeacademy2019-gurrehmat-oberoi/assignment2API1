const { booksHandler } = require('../handlers/booksHandler');

module.exports = [
  {
    method: 'GET',
    path: '/books',
    handler: booksHandler,
  },
];
