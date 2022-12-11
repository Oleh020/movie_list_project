import FILMS_API_KEY from "./key.js";

function getMovieList(movieId) {
    fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${FILMS_API_KEY}`)
        .then(response => response.json())
        .then(json => console.log(json));
};

getMovieList('tt3896198');
getMovieList('tt1232143');