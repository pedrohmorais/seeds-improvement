
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import api from './api';
import checkPostgres from './config/checkPostgres';

const server = express();

server.use(bodyParser.json())
server.use(cors({ origin: 'http://localhost:4200' }));

checkPostgres();

server.use('/api', api);
server.get("/health-check", (req, res, next) => {
  res.send('Working');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
