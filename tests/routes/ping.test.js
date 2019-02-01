const { server } = require('../../server');

describe('ping route', () => {
  const options = {
    method: 'GET',
    url: '/ping',
  };
  it('should respond with status 200 for GET request', async () => {
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
  it('should respond with string pong', async () => {
    const response = await server.inject(options);
    expect(typeof response.result).toEqual(typeof '');
    expect(response.result).toEqual('pong');
  });
});
