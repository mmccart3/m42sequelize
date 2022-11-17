const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const Director= sequelize.define('Director',{
    director_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        }
});

module.exports = Director;