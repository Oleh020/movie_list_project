async function getMovieList(movieId) {
    fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=90153e0b`)
        .then(response => response.json())
        .then(json => console.log(json));
};

getMovieList('tt3896198');
getMovieList('tt1232143');