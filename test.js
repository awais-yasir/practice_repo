import axios from "axios";
import { startServer } from "./app.js";

const PORT = 5000;
let server;


describe('Test', async () => {
  before (async () => {
    server = await startServer(PORT);
  })
  after (async () => {
    if(server) await server.close();
  })

  it('Register user', async () => {
    const res = await axios({ method: 'POST', url: 'http://localhost:5000/auth/register', data: {
      name: 'ABCD1234',
      password: 'xyz12X',
      email: 'abcd@abcd.com'
    }})
    expect(res.statusCode).toEqual(200)
  })
  it('login user', async () => {
    const res = await axios({ 
      method: 'POST', url: 'http://localhost:5000/auth/login', data: {
        name: 'ABCD1234',
        password: 'xyz12X'
      }});
    expect(res.statusCode).toEqual(200)
  })
})