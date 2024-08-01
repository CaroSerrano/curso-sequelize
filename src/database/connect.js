const { Sequelize } = require("sequelize");
const { database } = require('./config');

const sequelize = new Sequelize(
  database.DB_NAME,
  database.DB_USER,
  database.DB_PASS,
    {
        host: database.DB_HOST,
        port: database.DB_PORT,
        dialect: database.dialect
       
    }
);

module.exports = sequelize;
