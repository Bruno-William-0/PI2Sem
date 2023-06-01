import { Sequelize } from "sequelize" // npm i sequelize sqlite3

const db = new Sequelize(
    "database",
    "user",
    "passw",
    {
        dialect: "sqlite",
        storage: './db.sqlite'
    }
)

export default db