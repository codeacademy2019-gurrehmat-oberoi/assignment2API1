// const axios = require('axios');
// /**
//  * @jest-environment node
//  */
// const { server } = require('../../server');

// describe('books route', () => {
//   const options = {
//     method: 'GET',
//     url: '/books',
//   };
//   it('should respond with status 200 for GET request', async () => {
//     const response = await server.inject(options);
//     expect(response.statusCode).toEqual(200);
//   });
//   it('should respond with same response as reference API 1', async () => {
//     const response = await server.inject(options);
//     const expectedResult = { books: [{ Author: 'J K Rowling', id: 10, Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)' }, { Author: 'J K Rowling', id: 20, Name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)' }, { Author: 'Sidney Sheldon', id: 80, Name: 'If Tomorrow Comes (Tracy Whitney Series, #1)' }, { Author: 'Sidney Sheldon', id: 100, Name: 'Tell Me Your Dreams' }, { Author: 'J K Rowling', id: 30, Name: 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)' }, { Author: 'J K Rowling', id: 40, Name: 'Harry Potter and the Goblet of Fire (Harry Potter, #4)' }, { Author: 'Sidney Sheldon', id: 90, Name: 'Master of the Game' }, { Author: 'Sidney Sheldon', id: 110, Name: 'The Other Side of Midnight (Midnight #1)' }, { Author: 'J K Rowling', id: 50, Name: 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)' }, { Author: 'J K Rowling', id: 60, Name: 'Harry Potter and the Half-Blood Prince (Harry Potter, #6)' }, { Author: 'J K Rowling', id: 70, Name: 'Harry Potter and the Deathly Hallows (Harry Potter, #7)' }, { Author: 'Sidney Sheldon', id: 120, Name: 'Rage of Angels' }] };
//     expect(response.data).toEqual(axios.get('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks'));
//   });
// });
