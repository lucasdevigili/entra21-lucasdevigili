require("dotenv").config();
const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");

const sequelize = new Sequelize(dbConfig);

module.exports = sequelize;

// Testando conexão

// (async () => {
//     try{
//         await sequelize.authenticate();
//         console.log('conexão bem-sucedida!')
//     } catch (error) {
//         console.log('conexão falhou', error);
//     } finally {
//         sequelize.close();
//     }
// })();
