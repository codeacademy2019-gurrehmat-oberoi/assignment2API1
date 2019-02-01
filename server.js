const Hapi = require('hapi');
const routes = require('./src/routes');

const server = new Hapi.Server({
  port: 8081,
  host: 'localhost',
});

server.route(routes);

if (!module.parent) {
  server.start();
}
module.exports = {
  server,
};
