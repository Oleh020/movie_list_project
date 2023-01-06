import MOVIES_API_KEY from "./key.js";
import {NO_POSTER_URL} from "./constants.js";
import {headerRender} from "./headerRender.js";


const body = document.querySelector('body');
//At first function that creates header initializes
headerRender();


/**
 * This function renders a search bar proceduraly
 */
function searchBarRender() {
    const SBSection = document.createElement('section'),
         SBForm = document.createElement('form'),
         SBInput = document.createElement('input'),
         SBButton = document.createElement('button');

    SBSection.id = 'search-bar';
    SBForm.classList.add('search-bar__form');
    SBForm.type = 'submit';
    SBInput.classList.add('search-bar__input');
    SBInput.type = 'text';
    SBInput.placeholder = 'Enter the title of the movie please';
    SBButton.classList.add('search-bar__button');
    SBButton.type = 'submit';
    SBButton.innerHTML = '&#10162';

    SBForm.append(SBInput, SBButton);
    SBSection.append(SBForm);
    body.append(SBSection);
}

searchBarRender();

/**
 * This function renders a section for movie cards 
 */
function renderMovieCardsSection() {
    const movieCardsSection = document.createElement('section');
        movieCardsSection.id = 'movie-list';
    body.append(movieCardsSection);
}
renderMovieCardsSection();

/**
 * This function renders an error card on fetch response === false
 */
function noResultsFoundRender() {
    const errCard = document.createElement('div');
    errCard.classList.add('movie-list__nothing-found');
    errCard.innerText = 'No results found, try again';
    document.querySelector('#movie-list').append(errCard);
}

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
    document.querySelector('#movie-list').appendChild(movieCard);
}

/** this function sends request to the API and gets the movie list */
async function getMovieList(page = 1, searchValue='any') {
  
    const URL = `https://www.omdbapi.com/?s=${searchValue}&page=${page}&apikey=${MOVIES_API_KEY}`;
    const res = await fetch(`${URL}`);
    const movieList = await res.json();
    console.log(movieList);
    console.log(movieList.Response);
    if (movieList.Response === 'True'){
        movieList.Search.length = 9;
        movieList.Search.forEach(appendMovieCard);
    } else{
        noResultsFoundRender();
    }
}

getMovieList();    
 
/** this function resets movie list */
function clearMovieList() {
    document.querySelector('#movie-list').innerHTML = ' ';
}

/** this func receives a user input and executes list clearing and rendering funcs */
function handleMovieSearch(inputValue) {
    clearMovieList();
    getMovieList(1, inputValue);
}

document.querySelector('.search-bar__form').addEventListener('submit', (e) => {
    e.preventDefault();
    handleMovieSearch(document.querySelector('.search-bar__input').value);
});