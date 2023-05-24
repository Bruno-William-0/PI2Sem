import { pool } from "./DBCon.js";

export class Employer {
    constructor(name, birth, address, phone, email, employerfunction) {
        this.name = name;
        this.birth = birth;
        this.phone = phone;
        this.email = email;
        this.employerfunction = employerfunction;
    }
}

export const update = (id, employer) => {
    const query = `UPDATE Funcionario SET nome = $1, nascimento = $2, telefone = $3, email = $4, funcao = $5 WHERE id = $6`;
    const values = [employer.name, employer.birth, employer.phone, employer.email, employer.employerfunction];
  
    pool.query(query, values, (err, result) => {
      if (err) {
        console.error('Erro ao executar a consulta:', err);
        return false;
      } else {
        const rowsAffected = result.rowCount;
        return rowsAffected > 0;
      }
    });
    return ture
}

export const destroy = (id) => {
    const employer = findByPk(id)
    if(!employer) {
        return false
    }
    const index = dbEmployer.indexOf(employer)
    dbEmployer.splice(index, 1)
    return true
}

export const findByPk = (id) => {
    return dbEmployer.find(employer => employer.id ===id)
}

export const create = (employer) => {
    const query = 'INSERT INTO Funcionaro (nome, nascimento, telefone, email, funcao) VALUES ($1, $2, $3, $4, $5)';
    const values = [employer.name, employer.birth, employer.phone, employer.email, employer.employerfunction];

    pool.query(query, values, (err, result) => {
        if (err) {
          console.error('Erro ao executar a consulta:', err);
        } else {
          console.log('Funcionário criado com sucesso');
        }
      });
}

export const getEmployer = () => {
    const query = 'SELECT * FROM Funcionario';

  pool.query(query, (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
    } else {
      console.log('Clientes encontrados:');
      return result.rows
    }
  });
}

export const dbEmployer = [
    new Employer("Maria", "maria@gmail.com", "98765432", "avenida", "veterinaria"),
];
