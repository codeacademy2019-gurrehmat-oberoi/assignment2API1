const axios = require('axios');

const booksHandler = async () => {
  const result = await axios({
    method: 'get',
    url: 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks',
  });
  return result.data;
};

module.exports = { booksHandler };
