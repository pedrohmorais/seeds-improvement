
import express from 'express';
import * as api from './api';
import checkPostgres from './config/checkPostgres';
const server = express();

//const healthcheck = require('express-healthcheck')();
//server.get('/health(check)?', healthcheck);


checkPostgres();

server.use('/api', api);

server.listen(3000, () => {
 console.log('Server running on port 3000');
});
