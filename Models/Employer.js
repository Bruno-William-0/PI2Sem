import { pool } from "./DBCon.js";

export class Employer {
    constructor(name, birth, phone, email, employerfunction) {
        this.name = name;
        this.birth = birth;
        this.phone = phone;
        this.email = email;
        this.employerfunction = employerfunction;
    }
}

export const update = (id, employer) => {
    const query = `UPDATE Funcionario SET nome = $1, nascimento = $2, telefone = $3, email = $4, funcao = $5 WHERE id = $6`;
    const values = [employer.name, employer.birth, employer.phone, employer.email, employer.employerfunction, id];
  
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
    const query = 'DELETE FROM Funcionario WHERE id = $1';
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
    const query = 'SELECT * FROM Funcionario WHERE id = $1';
    const values = [id];
  
    return new Promise((resolve, reject) => {
      pool.query(query, values, (err, result) => {
        if (err) {
          console.error('Erro ao executar a consulta:', err);
          reject(console.error);
        } else {
          const employer = result.rows[0];
          resolve(employer);
        }
      });
    });
};

export const create = (employer) => {
    const query = 'INSERT INTO Funcionario (nome, nascimento, telefone, email, funcao) VALUES ($1, $2, $3, $4, $5)';
    const values = [employer.name, employer.birth, employer.phone, employer.email, employer.employerfunction];

    return new Promise((resolve, reject) => {
      pool.query(query, values, (err, result) => {
        if (err) {
          console.error('Erro ao executar a consulta:', err);
          reject(console.error);
        } else {
          console.log('Funcionário criado com sucesso');
          resolve();
        }
      });
    });
};

export const getEmployer = () => {
  const query = 'SELECT * FROM Funcionario';

  return new Promise((resolve, reject) => {
    pool.query(query, (err, result) => {
      if (err) {
        console.error('Erro ao executar a consulta:', err);
        reject(console.error);
      } else {
        console.log('Funcionários encontrados:');
        resolve(result.rows);
      }
    });
  });
};

export const dbEmployer = [
    new Employer("Maria", "maria@gmail.com", "98765432", "avenida", "veterinaria"),
];
