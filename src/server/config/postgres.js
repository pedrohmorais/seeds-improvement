// const dotEnv = require('dotenv').load();

const { Client } = require('pg');

const schema = 'farmer';
const pgClient = () => {
  const client = new Client({
      user: 'farmer',
      host: '127.0.0.1',
      database: 'farmer',
      password: 'farmer',
      port: 5432,
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