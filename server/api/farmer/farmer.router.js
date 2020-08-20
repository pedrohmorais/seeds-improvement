import express from 'express';
import farmerController from './farmer.controller';

const farmerRouter = express();
farmerRouter.get('/', farmerController.getAll);

module.exports = farmerRouter;
