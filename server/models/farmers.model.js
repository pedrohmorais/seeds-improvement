import  { pgClient, pgTables } from '../config/postgres';
import { join } from 'path';

class FarmersModel {
  getFullFarmers(searchParams) {
    return new Promise((resolve, reject) => {
      const query = [`SELECT
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
          ${pgTables.address} a on f.id = a.farmer_id`];

      const where = [];

      if (searchParams) {
        if (searchParams.id) {
          where.push({ agregation: 'or', condition: `d.document_number like '%${searchParams.id}%'` });
        }
        if (searchParams.name) {
          where.push({ agregation: 'or', condition: `lower(f.name) like '%${searchParams.name}%'` });
        }
      }

      let whereString = where.map((whereEl, i) => {
        const { condition, agregation } = whereEl;
        return i === 0 ? condition : `${agregation} ${condition}`;
      }).join(' ');

      if (whereString) {
        whereString = `where ${whereString}`;
      }
      
      query.push(whereString);

      const client = pgClient();
      client.query(query.join(' '), (err, res) => {
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