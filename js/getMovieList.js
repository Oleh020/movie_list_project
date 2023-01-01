import MOVIES_API_KEY from "./key.js";
import NO_POSTER_URL from "./constants.js"

const movieListById = document.querySelector('#movie-list'),
     searchBarInput = document.querySelector('.search-bar__input'),
     searchBtn = document.querySelector('.search-bar__button');

/** this function receives an array of movies and render them on page */
function appendMovieCard(movie) {
    
    const title = document.createElement('div');
        title.innerText = movie.Title;
        title.classList.add('movie-card__title');
    const releaseYear = document.createElement('div');
        releaseYear.innerText = movie.Year;
        releaseYear.classList.add('movie-card__year');
    const movieCard = document.createElement('a');
        movieCard.classList.add('movie-card');
        movieCard.setAttribute("href", `./moviePage.html?id=${movie.imdbID}`)
        movieCard.appendChild(title);
        movieCard.appendChild(releaseYear);
        if (movie.Poster != "N/A") {
            movieCard.style.background = `URL(${movie.Poster}) no-repeat center center/cover`;
        } else {
            movieCard.style.background = `URL(${NO_POSTER_URL}) no-repeat center center/cover`;
        }
    movieListById.appendChild(movieCard);
}

/** this function sends request to the API and gets the movie list */
async function getMovieList(page = 1, searchValue='any') {
  
    const URL = `https://www.omdbapi.com/?s=${searchValue}&page=${page}&apikey=${MOVIES_API_KEY}`;
    const res = await fetch(`${URL}`);
    const movieList = await res.json();
    movieList.Search.forEach(appendMovieCard);
}

getMovieList();    
 
/** this function resets movie list */
function clearMovieList() {
    movieListById.innerHTML = ' ';
}

/** this func receives a user input and executes list clearing and rendering funcs */
function handleMovieSearch(inputValue) {
    clearMovieList();
    getMovieList(1, inputValue);
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    handleMovieSearch(searchBarInput.value);
});