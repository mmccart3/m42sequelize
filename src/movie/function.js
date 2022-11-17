const Movie = require("./table");
const Actor = require("./actor.table");
const Director = require("./director.table");

async function createMovie(title, actor, director) {
    try {        
        if(await Actor.findOne({ where: { name: actor } }) == null) {
            await Actor.create ({name: actor});
            const tmpActor = await Actor.findOne({ where: { name: actor } })
            actor_id = tmpActor.dataValues.actor_id;
        } else {
            const tmpActor = await Actor.findOne({ where: { name: actor } })
            actor_id = tmpActor.dataValues.actor_id;
        }
        if(await Director.findOne({ where: { name: director } }) == null) {
            await Director.create ({name: director});
            const tmpDirector = await Director.findOne({ where: { name: director } })
            director_id = tmpDirector.dataValues.director_id;
        } else {
            const tmpDirector = await Director.findOne({ where: { name: director } });
            director_id = tmpDirector.dataValues.director_id;
        }
        const newMovie = await Movie.create({title:title, actor_id: actor_id, director_id : director_id})
        // console.log(newMovie);
    } catch (error) {
        console.log(error)
    }
};

async function listMovies() {
    try {
        const movieList = await Movie.findAll();
        for (let index = 0; index < movieList.length; index++) {
            const movie = movieList[index];
            const director = await Director.findOne({ where: { director_id: movie.director_id } });
            const actor = await Actor.findOne({ where: { actor_id: movie.actor_id } });
            console.log(`${movie.movie_id} ${movie.title} \n\ Principal Actor:${actor.name} Director:${director.name}`);
            }
    } catch (error) {
        console.log(error)
    }
};

async function updateActor(title,newActor) {
    try {
        const updatedMovie = await Movie.update(
            { actor: newActor },
            {where: {title: title } }
            );
        if (updatedMovie[0] === 1) {
            console.log(`Principal actor in ${title} updated to be ${newActor}`);
        } else {
            console.log(`Film not recognized`)
        };
    } catch (error) {
        console.log(error)
    }
};

async function updateDirector(title,newDirector) {
    try {
        const updatedMovie = await Movie.update(
            { director: newDirector },
            {where: {title: title } }
            );
        if (updatedMovie[0] === 1) {
            console.log(`Director of ${title} updated to be ${newDirector}`);
        } else {
            console.log(`Film not recognized`)
        };
    } catch (error) {
        console.log(error)
    }
};

async function deleteMovie(title) {
    try {
        const deletedMovie = await Movie.destroy({
            where: {title:title}
        });
        if (deletedMovie === 1) {
            console.log(`${title} has been deleted`);
        } else {
            console.log(`Film not recognized`)
        };
    } catch (error) {
        console.log(error)
    }
};

module.exports ={createMovie, listMovies, updateActor, updateDirector, deleteMovie};