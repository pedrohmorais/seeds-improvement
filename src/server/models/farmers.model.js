import  { pgClient, pgTables } from '../config/postgres';

class FarmersModel {
  getFullFarmers() {
    return new Promise((resolve, reject) => {
      const query = `SELECT
          f.id,
          f.name,
          d.document_number,
          d.document_type,
          a.street,
          a.state,
          a.address,
          a.country
        FROM ${pgTables.farmer} f
        inner join 
          ${pgTables.document} d on f.id = d.farmer_id
        inner join 
          ${pgTables.address} a on f.id = a.farmer_id`;

      const client = pgClient();
      client.query(query, (err, res) => {
        if (err) {
          reject(err);
        }
        const farmersResponse = res.rows.map(farmerResp => {
          const {
            id,
            name,
            document_number,
            document_type,
            street,
            state,
            address,
            country,
          } = farmerResp
          return {
            id,
            document: {
              documentNumber: document_number,
              documentType: document_type,
            },
            name,
            address: {
              street,
              state,
              address,
              country,
            },
          }
        });
        resolve(farmersResponse);
        client.end();
      });
    })
  }
}

export default FarmersModel;