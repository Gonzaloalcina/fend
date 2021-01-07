import { app } from '../src/server/server';
const supertest = require('supertest');
const request = supertest(app);
const { response } = require('express');

it('gets the test endpoint', async done => {
    const response = await request.get('/test')
  
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('pass!')
    done()
});
