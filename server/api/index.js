import express from 'express';
import farmerRouter from './farmer/farmer.router';

const api = express();
api.use('/farmers', farmerRouter);

module.exports = api;
