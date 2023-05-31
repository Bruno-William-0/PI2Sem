import { pool } from "./DBCon.js";

export class Pet {
constructor(name, birth, breed, speec, color, size, owner) {
this.name = name;
this.birth = birth;
this.breed = breed;
this.speec = speec;
this.color = color;
this.size = size;
this.owner = owner;
}

update(id) {
const query = "UPDATE Pet SET nome = $1, nascimento = $2, raca = $3, especie = $4, cor = $5, porte = $6, fk_usuario_id = $7 WHERE id = $8";
const values = [this.name, this.birth, this.breed, this.speec, this.color, this.size, this.owner, id];

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

destroy(id) {
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

destroy(id) {
const query = 'DELETE FROM Pet WHERE id = $1';
const values = [id];

}

static findByPk(id) {
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

static create(pet) {
const query = 'INSERT INTO Pet (nome, nascimento, raca, especie, cor, porte, fk_usuario_id) VALUES ($1, $2, $3, $4, $5, $6, $7)';
const values = [pet.name, pet.birth, pet.breed, pet.speec, pet.color, pet.size, pet.owner];

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

static findPet() {
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
}

export const dbClient = [
new Pet('Jubileu', '2020-01-01', 'Poodle', 'Cachorro', 'Branco', 'Pequeno', 'João'),
];
