const pingRoutes = require('./ping');
const bookRoutes = require('./booksWithRatings');

module.exports = [
  ...pingRoutes, ...bookRoutes,
];
