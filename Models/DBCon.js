import pkg from 'pg';
const { Pool } = pkg;

// const dbConfig = {
//   user: 'postgres',
//   password: '123',
//   host: 'localhost',
//   port: 5432, // Porta padrão do PostgreSQL é 5432
//   database: 'postgres',
// };

// const dbConfig = {
//   user: 'fatec',
//   password: 'aYgIY2O1bVgL63wYoFSui2JodHhZYjaG',
//   host: 'dpg-chlcm5bhp8uej74br2kg-a.oregon-postgres.render.com',
//   port: 5432, // Porta padrão do PostgreSQL é 5432
//   database: 'pi_00en',
// };

const dbConfig = {
  user: 'ithxcnqj',
  password: 'YHqVJIwaUY1RdEC6TIEZuufC0z_bkhYk',
  host: 'silly.db.elephantsql.com',
  port: 5432, // Porta padrão do PostgreSQL é 5432
  database: 'ithxcnqj',
};


export const pool = new Pool(dbConfig);