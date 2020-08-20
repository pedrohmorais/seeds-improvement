import  { pgClient, pgTables } from './postgres';

/*
  How RESET tables:
  TRUNCATE ${pgTables.farmer} RESTART IDENTITY CASCADE ;
  TRUNCATE farmer.documents RESTART IDENTITY CASCADE ;
  TRUNCATE farmer.address RESTART IDENTITY CASCADE ;
*/

const tables = pgClient().tables

const checkUsers = () => new Promise((resolve) => {
  const query = `select count(usename) from pg_user`;
  const client = pgClient();
  client.query(query, (err, res) => {
    if (err) {
      console.error('Database error: ', err);
      process.exit();
    }
    if (res.rowCount === 0) {
      console.log('No users in database!');
      process.exit();
    }
    client.end();
    resolve();
  });
});

const checkSchema = () => new Promise((resolve) => {
  const query = `CREATE SCHEMA IF NOT EXISTS farmer`;
  const client = pgClient();
  client.query(query, (err, res) => {
    if (err) {
      console.error('Database error: ', err);
      process.exit();
    }
    client.end();
    resolve();
  });
})

const checkFarmers = () => new Promise((resolve) => {
  const query = `CREATE TABLE IF NOT EXISTS ${pgTables.farmer} (
    id SERIAL PRIMARY KEY,
    name varchar
  )`;
  const client = pgClient();
  client.query(query, (err, res) => {
    if (err) {
      console.error('Database table error: ', err);
      process.exit();
    }
    client.end();
    resolve();
  });
});

const checkDocuments = () => new Promise((resolve) => {
  const query = `CREATE TABLE IF NOT EXISTS farmer.documents (
    id SERIAL PRIMARY KEY,
    farmer_id integer REFERENCES farmers (id),
    document_number varchar,
    document_type varchar
  )`;
  const client = pgClient();
  client.query(query, (err, res) => {
    if (err) {
      console.error('Database table error: ', err);
      process.exit();
    }
    client.end();
    resolve();
  });
});

const checkAddress = () => new Promise((resolve) => {
  const query = `CREATE TABLE IF NOT EXISTS farmer.address (
    id SERIAL PRIMARY KEY,
    farmer_id integer REFERENCES farmers (id),
    street varchar,
    state varchar,
    address varchar,
    country varchar
  )`;
  const client = pgClient();
  client.query(query, (err, res) => {
    if (err) {
      console.error('Database table error: ', err);
      process.exit();
    }
    client.end();
  });
  resolve();
})

const seedFarmers = () => new Promise((resolve) => {
  const getQuery = `SELECT * FROM ${pgTables.farmer}`;
  const client = pgClient();
  client.query(getQuery, (err, res) => {
    if (err) {
      console.error('Database table error: ', err);
      process.exit();
    }
    if (res.rowCount < 2 && res.rowCount !== 0) {
      console.error('Invalid initial values, please truncate this table!');
      process.exit();
    }
    if (res.rowCount >= 2) {
      resolve();
      return;
    }
    const insertQuery = `INSERT INTO ${pgTables.farmer} (name) values 
      ('Rick'),
      ('Sanchez')`;
    client.query(insertQuery, (err, res) => {
      if (err) {
        console.error('Database table error: ', err);
        process.exit();
      }
      client.end();
      resolve();
    });
  });
})

const seedDocuments = () => new Promise((resolve) => {
  const getQuery = `SELECT * FROM farmer.documents`;
  const client = pgClient();
  client.query(getQuery, (err, res) => {
    if (err) {
      console.error('Database table error: ', err);
      process.exit();
    }
    if (res.rowCount < 2 && res.rowCount !== 0) {
      console.error('Invalid initial values, please truncate this table!');
      process.exit();
    }
    if (res.rowCount >= 2) {
      resolve();
      return;
    }
    const insertQuery = `INSERT INTO farmer.documents (
        farmer_id,
        document_number,
        document_type
      ) values 
      (1, '123.456.789-10', 'cpf'),
      (2, '12345678', 'DNI')`;
    client.query(insertQuery, (err, res) => {
      if (err) {
        console.error('Database table error: ', err);
        process.exit();
      }
      client.end();
      resolve();
    });
  });
});

const seedAddress = () => new Promise((resolve) => {
  const getQuery = `SELECT * FROM farmer.address`;
  const client = pgClient();
  client.query(getQuery, (err, res) => {
    if (err) {
      console.error('Database table error: ', err);
      process.exit();
    }
    if (res.rowCount < 2 && res.rowCount !== 0) {
      console.error('Invalid initial values, please truncate this table!');
      process.exit();
    }
    if (res.rowCount >= 2) {
      resolve();
      return;
    }
    const insertQuery = `INSERT INTO farmer.address (
      farmer_id,
      street,
      state,
      address,
      country
    ) values 
      (
        1,
        'Av Paulista 9999',
        'Brazil',
        'São Paulo',
        'Av Paulista'
      ),
      (
        2,
        'Calle Esmeralda 9999',
        'Argentina',
        'Buenos Aires',
        'Calle Esmeralda'
      )`;
    client.query(insertQuery, (err, res) => {
      if (err) {
        console.error('Database table error: ', err);
        process.exit();
      }
      client.end();
      resolve();
    });
  });
});

const seedTables = async () => {
  await seedFarmers();
  await seedDocuments();
  await seedAddress();
}

const checkTables = async () => {
  await checkFarmers();
  await checkDocuments();
  await checkAddress();
};

const checkPostgres = async () => {
  await checkUsers();
  await checkSchema();
  await checkTables();
  await seedTables();
}

export default checkPostgres;

