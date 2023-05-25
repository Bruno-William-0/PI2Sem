import { pool } from "./DBCon.js";

export class Consult {
    constructor(client, employer, date, obs) {
        this.client = client;
        this.employer = employer;
        this.date = date;
        this.obs = obs;
    }
}

export const update = (id, consult) => {
  const query = `UPDATE Consulta SET cliente/usuario = $1, funcionario = $2, data = $3, observação = $4 WHERE id = $5`;
  const values = [consult.client, consult.employer, consult.date, consult.obs, id];

  pool.query(query, values, (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      return false;
    } else {
      const rowsAffected = result.rowCount;
      return rowsAffected > 0;
    }
  });
};

export const destroy = (id) => {
  const query = 'DELETE FROM Consulta WHERE id = $1';
  const values = [id];

  pool.query(query, values, (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      return false;
    } else {
      const rowsAffected = result.rowCount;
      return rowsAffected > 0;
    }
  });
};

export const findByPk = (id) => {
  const query = 'SELECT * FROM Consulta WHERE id = $1';
  const values = [id];

  return new Promise((resolve, reject) => {
    pool.query(query, values, (err, result) => {
      if (err) {
        console.error('Erro ao executar a consulta:', err);
        reject(err);
      } else {
        const consult = result.rows[0];
        resolve(consult);
      }
    });
  });
};

export const create = (consult) => {
  const query = 'INSERT INTO Consulta (cliente/usuario, funcionario, data, observação) VALUES ($1, $2, $3, $4)';
  const values = [consult.client, consult.employer, consult.date, consult.obs, id];

  pool.query(query, values, (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
    } else {
      console.log('Consulta criada com sucesso');
    }
  });
};


export const findConsult = () => {
  const query = 'SELECT * FROM Consulta';

  pool.query(query, (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
    } else {
      console.log('Consultas encontrados:');
      return result.rows
    }
  });
};

export const dbConsult = [
  new Consult( 'Guilherme', 'Joana', '07/08/2023','Banho/Tosa'),
];
