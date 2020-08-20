import dotenv from 'dotenv';

dotenv.config();

const { Client } = require('pg');

const schema = 'farmer';
const pgClient = () => {
  const client = new Client({
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_URL,
      database: process.env.POSTGRES_DATABASE,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT,
  });
  client.connect();
  return client;
};

const pgTables = {
  farmer: `${schema}.farmers`,
  document: `${schema}.documents`,
  address: `${schema}.address`,
};

export { 
  pgClient,
  pgTables,
};