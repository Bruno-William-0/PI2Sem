import pkg from 'pg';
const { Pool } = pkg;

const dbConfig = {
  user: 'postgres',
  password: '123',
  host: 'localhost',
  port: 5432, // Porta padrão do PostgreSQL é 5432
  database: 'postgres',
};


export const pool = new Pool(dbConfig);