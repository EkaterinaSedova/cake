const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    "cakeshop",
    "postgres",
    "2NBppDrV",
    {
        dialect: 'postgres',
        host: "localhost",
        port: 5000,
    }
)