import { pool } from "./DBCon.js";

export class Pet {
  constructor(name, birth, hair, breed, speec, color, size, owner) {
    this.name = name;
    this.birth = birth;
    this.hair = hair;
    this.breed = breed;
    this.speec = speec;
    this.color = color;
    this.size = size;
    this.owner = owner;
  }
}

export const update = (id) => {
  const query = "UPDATE Pet SET nome = $1, nascimento = $2, pelo = $3 raca = $4, especie = $5, cor = $6, porte = $7, fk_usuario_id = $8 WHERE id = $9";
  const values = [this.name, this.birth, this.hair, this.breed, this.speec, this.color, this.size, this.owner, id];

  return new Promise((resolve, reject) => {
    pool.query(query, values, (err, result) => {
      if (err) {
        reject(console.error('Erro ao executar a consulta:', err));
      } else {
        const rowsAffected = result.rowCount;
        resolve(rowsAffected > 0);
      }
    });
  });

}

export const destroy = (id) => {
  const query = 'DELETE FROM Pet WHERE id = $1';
  const values = [id];

  return new Promise((resolve, reject) => {
    pool.query(query, values, (err, result) => {
      if (err) {
        reject(console.error('Erro ao executar a consulta:', err));
      } else {
        const rowsAffected = result.rowCount;
        resolve(rowsAffected > 0);
      }
    });
  });

}


export const findByPk = (id) => {
  const query = 'SELECT * FROM Pet WHERE id = $1';
  const values = [id];

  return new Promise((resolve, reject) => {
    pool.query(query, values, (err, result) => {
      if (err) {
        reject(console.error('Erro ao executar a consulta:', err));
      } else {
        const pet = result.rows[0];
        resolve(pet);
      }
    });
  });

}

export const create = (pet) => {
  const query = 'INSERT INTO Pet (nome, nascimento, pelo, raca, especie, cor, porte, fk_usuario_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
  const values = [pet.name, pet.birth, pet.hair, pet.breed, pet.speec, pet.color, pet.size, pet.owner];

  return new Promise((resolve, reject) => {
    pool.query(query, values, (err, result) => {
      if (err) {
        reject(console.error('Erro ao executar a consulta:', err));
      } else {
        console.log('Pet criado com sucesso');
        resolve();
      }
    });
  });

}

export const findPet = () => {
  const query = 'SELECT * FROM Pet';

  return new Promise((resolve, reject) => {
    pool.query(query, (err, result) => {
      if (err) {
        reject(console.error('Erro ao executar a consulta:', err));
      } else {
        console.log('Pets encontrados:');
        resolve(result.rows);
      }
    });
  });

}

export const findPetByOwner = (owner) => {
  const query = 'SELECT * FROM Pet where fk_usuário_id = $1';
  const values = [owner]

  return new Promise((resolve, reject) => {
    pool.query(query, (err, result) => {
      if (err) {
        reject(console.error('Erro ao executar a consulta:', err));
      } else {
        console.log('Pets encontrados:');
        resolve(result.rows);
      }
    });
  });

}


export const dbClient = [
  new Pet('Jubileu', '2020-01-01', 'Poodle', 'Cachorro', 'Branco', 'Pequeno', 'João'),
];
