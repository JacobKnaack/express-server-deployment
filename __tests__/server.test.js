'use strict';

const server = require('../app.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing my HTTP server', () => {

  test('Should be able to reponse to a POST to /message', async () => {
    let response = await request.post('/message?text=test&author=test');

    expect(response.status).toEqual(200);
    expect(response.body[0].text).toEqual('test');
  });

  test('Should be able to fetch messages', async () => {
    let response = await request.get('/message');

    expect(response.status).toEqual(200);
    expect(response.body[0].text).toEqual('test');
  });

  test('Should be able to fetch messages', async () => {
    let response = await request.get('/bad');

    expect(response.status).toEqual(404);
    expect(response.text).toEqual('***** Nothing found *****');
  });
});
