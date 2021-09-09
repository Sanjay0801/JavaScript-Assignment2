$.getJSON("https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json", (movieData) => {

    console.log("Question 1");

    actorsObj = {};
    genresObj = {};

    // Executes in 707.1399 milliseconds
    movieData.forEach(movie => {
        movie.cast.forEach(castMember => {
            if(!isNaN(castMember)){}
            else if(actorsObj[castMember]){
                actorsObj[castMember] = [...actorsObj[castMember], movie.title]
            }
            else{
                actorsObj[castMember] = [ movie.title ]
            }
        });
        movie.genres.forEach(genre => {
            if(!isNaN(genre)){}
            else if(genresObj[genre]){
                genresObj[genre] = [...genresObj[genre], movie.title]
            }
            else{
                genresObj[genre] = [ movie.title ]
            }
        })
    });

    let result = {
        actors: [],
        genres: []
    }

    for(actorName in actorsObj){
        result.actors.push({
            Name: actorName,
            Movies: actorsObj[actorName]
        });
    }
    for(genreType in genresObj){
        result.genres.push({
            Type: genreType,
            Movies: genresObj[genreType]
        });
    }

    console.log(result)

});