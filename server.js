const Hapi = require('hapi');
const ping = require('./src/routes/ping');

const server = new Hapi.Server({
  port: 8081,
  host: 'localhost',
});

server.route(ping);

if (!module.parent) {
  server.start();
}
module.exports = {
  server,
};
