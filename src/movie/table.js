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
        references: { model: 'Actors', key: 'actor_id' },
        onDelete: 'CASCADE' // Deletes the movies if the actor is deleted
    },
    director_id: {
        type: DataTypes.INTEGER,
        references: { model: 'Directors', key: 'director_id' },
        onDelete: 'CASCADE' // Deletes the movies if the director is deleted
    }
},{timestamps:false}); // this switches off date and timestamps

module.exports = Movie;