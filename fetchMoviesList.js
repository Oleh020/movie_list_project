import MOVIES_API_KEY from "./key.js";

//function getMovieList(movieId) {
//    fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${MOVIES_API_KEY}`)
 //       .then(response => response.json())
//        .then(json => console.log(json))
//        .then(json => {const body = document.querySelector('body');
//        body.innerHTML = `<div> ${json.genre} </div>`});
//};

// data/ item

const movieListById = document.querySelector('#movie-list');
let userInput = document.querySelector('.search-bar__input');

function appendMovieCard(movie) {
    const title = document.createElement('div');
        title.innerText = movie.Title;
        title.classList.add('movie-card__title');
    const releaseYear = document.createElement('div');
        releaseYear.innerText = movie.Year;
        releaseYear.classList.add('movie-card__year');
    const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.appendChild(title);
        movieCard.appendChild(releaseYear);
        if (movie.Poster != "N/A") {
            movieCard.style.background = `URL(${movie.Poster}) no-repeat center center/cover`;
        } else {
            movieCard.style.background = `URL(https://fxpanel.net/images/no-poster.jpg) no-repeat center center/cover`;
        }
    movieListById.appendChild(movieCard);
}

async function renderMovieList(page = 1, searchValue='any') {
    const URL = `https://www.omdbapi.com/?s=${searchValue}&page=${page}&apikey=${MOVIES_API_KEY}`;
    const res = await fetch(`${URL}`);
    const movieList = await res.json();
    //console.log(movieList.Search);
    
    movieList.Search.forEach(appendMovieCard);
}

function renderMovieListByTitle(e) {
    clearMovieList();
    const userSearchValue = e.target.value;
    renderMovieList(1, userSearchValue);
}

function clearMovieList() {
    movieListById.innerHTML = ' ';
}

userInput.addEventListener('input', renderMovieListByTitle);

renderMovieList();