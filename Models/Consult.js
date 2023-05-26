import { pool } from "./DBCon.js";

export class Consult {
  constructor(pet, employer, date) {
    this.pet = pet;
    this.employer = employer;
    this.date = date;
  }
}

export const update = (id, consult) => {
  const query = `UPDATE servico_cuida SET fk_pet_id = $1, fk_funcionario_id = $2, data = $3 WHERE id = $4`;
  const values = [consult.pet, consult.employer, consult.date, id];

  return new Promise((resolve, reject) => {
    pool.query(query, values, (err, result) => {
      if (err) {
        console.error('Erro ao executar a consulta:', err);
        reject(console.error);
      } else {
        const rowsAffected = result.rowCount;
        resolve(rowsAffected > 0);
      }
    });
  });
};

export const destroy = (id) => {
  const query = 'DELETE FROM servico_cuida WHERE id = $1';
  const values = [id];

  return new Promise((resolve, reject) => {
    pool.query(query, values, (err, result) => {
      if (err) {
        console.error('Erro ao executar a consulta:', err);
        reject(console.error);
      } else {
        const rowsAffected = result.rowCount;
        resolve(rowsAffected > 0);
      }
    });
  });
};

export const findByPk = (id) => {
  const query = 'SELECT * FROM servico_cuida WHERE id = $1';
  const values = [id];

  return new Promise((resolve, reject) => {
    pool.query(query, values, (err, result) => {
      if (err) {
        console.error('Erro ao executar a consulta:', err);
        reject(console.error);
      } else {
        const consult = result.rows[0];
        resolve(consult);
      }
    });
  });
};

export const create = (consult) => {
  const query = 'INSERT INTO servico_cuida (fk_pet_id, fk_funcionario_id, data) VALUES ($1, $2, $3)';
  const values = [consult.pet, consult.employer, consult.date];

  return new Promise((resolve, reject) => {
    pool.query(query, values, (err, result) => {
      if (err) {
        console.error('Erro ao executar a consulta:', err);
        reject(console.error);
      } else {
        console.log('Consulta criada com sucesso');
        resolve();
      }
    });
  });
};

export const findConsult = () => {
  const query = 'SELECT * FROM servico_cuida';

  return new Promise((resolve, reject) => {
    pool.query(query, (err, result) => {
      if (err) {
        console.error('Erro ao executar a consulta:', err);
        reject(console.error);
      } else {
        console.log('Consultas encontradas:');
        resolve(result.rows);
      }
    });
  });
};

export const dbConsult = [
  new Consult('Guilherme', 'Joana', '07/08/2023'),
];
