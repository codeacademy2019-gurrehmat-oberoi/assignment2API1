const { pingHandler } = require('../handlers/pingHandler');

module.exports = [{
  method: 'GET',
  path: '/ping',
  handler: pingHandler,
}];
