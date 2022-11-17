const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const Actor = sequelize.define('Actor',{
    actor_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        }
});

module.exports = Actor;