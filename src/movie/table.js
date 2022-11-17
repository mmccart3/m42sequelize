const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const Movie =sequelize.define("Movie", {
    movie_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    actor_id: {
        type: DataTypes.INTEGER,
    },
    director_id: {
        type: DataTypes.INTEGER,
    }
});

module.exports = Movie;