import MOVIES_API_KEY from "./key.js";
import NO_POSTER_URL from "./constants.js"

const movieListById = document.querySelector('#movie-list');
const userInput = document.querySelector('.search-bar__input');

    function clearMovieList() {
        //this function resets movie list
        movieListById.innerHTML = ' ';
    }


    function handleMovieSearch(e) {
        //this function gets users input and executes next function with users input value as an argument
        clearMovieList();
        const userSearchValue = e.target.value;
        getMovieList(1, userSearchValue);
    }

    async function getMovieList(page = 1, searchValue='any') {
        //this function sends request to the API and gets the movie list
        const URL = `https://www.omdbapi.com/?s=${searchValue}&page=${page}&apikey=${MOVIES_API_KEY}`;
        const res = await fetch(`${URL}`);
        const movieList = await res.json();
        movieList.Search.forEach(appendMovieCard);
    }

    function appendMovieCard(movie) {
        //this function receives an array of movies and render them on page
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
                movieCard.style.background = `URL(${NO_POSTER_URL}) no-repeat center center/cover`;
            }
        movieListById.appendChild(movieCard);
    }

getMovieList();

userInput.addEventListener('input', handleMovieSearch);