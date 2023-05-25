import { pool } from "./DBCon.js";

export class Pet {
  constructor(name, speec, breed, age) {
    this.name = name;
    this.speec = speec;
    this.breed = breed;
    this.age = age;
  }
}

export const update = (id, pet) => {
  const query = `UPDATE Pet SET nome = $1, pelo = $2, raca = $3, idade = $4 WHERE id = $5`;
  const values = [pet.name, pet.speec, pet.breed, pet.age, id];

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
  const query = 'DELETE FROM Pet WHERE id = $1';
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
  const query = 'SELECT * FROM Pet WHERE id = $1';
  const values = [id];

  return new Promise((resolve, reject) => {
    pool.query(query, values, (err, result) => {
      if (err) {
        console.error('Erro ao executar a consulta:', err);
        reject(err);
      } else {
        const pet = result.rows[0];
        resolve(pet);
      }
    });
  });
};

export const create = (pet) => {
  const query = 'INSERT INTO Pet (nome, speec, breed, age) VALUES ($1, $2, $3, $4)';
  const values = [pet.name, pet.speec, pet.breed, pet.age];

  pool.query(query, values, (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
    } else {
      console.log('Pet criado com sucesso');
    }
  });
};


export const findPet = () => {
  const query = 'SELECT * FROM Pet';

  pool.query(query, (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
    } else {
      console.log('Pets encontrados:');
      return result.rows
    }
  });
};


export const dbClient = [
  new Pet( 'Jubileu', 'Pelo curto', 'Xiuaua sla','52 anos'),
];
