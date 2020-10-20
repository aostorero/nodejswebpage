const Sequelize = require('sequelize');
//en este archivo se configura la conexion a una base de datos sql usando sequelize
module.exports = new Sequelize('agenciadeviajes', 'root', 'root', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
})