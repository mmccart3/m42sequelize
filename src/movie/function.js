const Movie = require("./table");

async function createMovie(movieObject) {
    try {
        const newMovie = await Movie.create(movieObject);
        console.log(newMovie);
    } catch (error) {
        console.log(error)
    }
};

exports.createMovie = createMovie;