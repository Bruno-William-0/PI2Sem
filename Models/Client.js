import { pool } from "./DBCon.js";

export class Client {
  constructor(name, email, phone, address, password) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.password  = password;
  }
}

export const update = (id, client) => {
  const query = `UPDATE Usuario SET nome = $1, email = $2, telefone = $3, endereco = $4, senha = $5 WHERE id = $6`;
  const values = [client.name, client.email, client.phone, client.address, client.password, id];

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
  const query = 'DELETE FROM Usuario WHERE id = $1';
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
  const query = 'SELECT * FROM Usuario WHERE id = $1';
  const values = [id];

  return new Promise((resolve, reject) => {
    pool.query(query, values, (err, result) => {
      if (err) {
        console.error('Erro ao executar a consulta:', err);
        reject(err);
      } else {
        const client = result.rows[0];
        resolve(client);
      }
    });
  });
};

export const create = (client) => {
  const query = 'INSERT INTO Usuario (nome, telefone, endereco, email, senha) VALUES ($1, $2, $3, $4, $5)';
  const values = [client.name, client.phone, client.address, client.email, client.password];

  pool.query(query, values, (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
    } else {
      console.log('Cliente criado com sucesso');
    }
  });
};


export const findClient = () => {
  const query = 'SELECT * FROM Usuario';

  return new Promise((resolve, reject) => {
  pool.query(query, (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
    } else {
      console.log('Clientes encontrados:');
      resolve(result.rows)  
    }
  });
})
};


export const dbClient = [
  new Client( 'Guilherme', 'email@gmail.com', '40028922','rua', '1234'),
];
