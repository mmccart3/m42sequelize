const yargs = require('yargs');
const { sequelize } = require("./db/connection");
const { createMovie } = require ("./movie/function");

async function app (yargsObject) {
    await sequelize.sync();
    if (yargsObject.create) {
        //create code goes here
        await createMovie({title: yargsObject.title, actor: yargsObject.actor, director: yargsObject.director});
    } else if (yargsObject.read) {
        //read code goes here
    } else if (yargsObject.update) {
        //update code goes here
    } else if (yargsObject.delete) {
        //delete code here
    } else {
        console.log("Command not recognised");
    }
}

app(yargs.argv);