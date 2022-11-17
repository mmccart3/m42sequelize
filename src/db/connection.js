require('dotenv').config();
// OR alternatively using ES6 syntax:-
// import * as dotenv from 'dotenv'
// dotenv.config()
const { Sequelize } =  require("sequelize");

const sequelize = new Sequelize(process.env.MYSQL_URI);

sequelize.authenticate();
console.log('Connection has been established successfully.');

module.exports = {sequelize}
// exports.sequelize = new Sequelize(process.env.MYSQL_URI);