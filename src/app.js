const yargs = require('yargs');
const { sequelize } = require("./db/connection");
const { createMovie, listMovies, updateActor, updateDirector, deleteMovie } = require ("./movie/function");

async function app (yargsObject) {
    await sequelize.sync();
    if (yargsObject.create) {
        //create code goes here
        await createMovie(yargsObject.title, yargsObject.actor, yargsObject.director);
    } else if (yargsObject.read) {
        //read code goes here
        await listMovies();
    } else if (yargsObject.updateActor) {
        //update code goes here
        await updateActor(yargsObject.title, yargsObject.newActor);
    } else if (yargsObject.updateDirector) {
        //update code goes here
        await updateDirector(yargsObject.title, yargsObject.newDirector);
    } else if (yargsObject.delete) {
        //delete code here
        await deleteMovie(yargsObject.title);
    } else {
        console.log("Command not recognised");
    };
    sequelize.close();
}

app(yargs.argv);