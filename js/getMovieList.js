import MOVIES_API_KEY from "./key.js";
import {NO_POSTER_URL} from "./constants.js";
import {headerRender, renderFavoriteMovieCards} from "./headerRender.js";


const body = document.querySelector('body');
//At first function that creates header initializes
headerRender();


/**
 * This function renders a search bar proceduraly
 */
function searchBarRender() {
    const searchBarSection = document.createElement('section'),
         searchBarForm = document.createElement('form'),
         searchBarInput = document.createElement('input'),
         searchBarButton = document.createElement('button');

    searchBarSection.id = 'search-bar';
    searchBarForm.classList.add('search-bar__form');
    searchBarForm.type = 'submit';
    searchBarInput.classList.add('search-bar__input');
    searchBarInput.type = 'text';
    searchBarInput.placeholder = 'Enter the title of the movie please';
    searchBarButton.classList.add('search-bar__button');
    searchBarButton.type = 'submit';
    searchBarButton.innerHTML = '&#10162';

    searchBarForm.append(searchBarInput, searchBarButton);
    searchBarSection.append(searchBarForm);
    body.append(searchBarSection);

    searchBarForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleMovieSearch(1, searchBarInput.value);
    });
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
    const star = document.createElement('div');
        star.innerHTML = '&#9734';
        star.classList.add('movie-card__star-hidden');
    const title = document.createElement('div');
        title.innerText = movie.Title;
        title.classList.add('movie-card__title');
    const releaseYear = document.createElement('div');
        releaseYear.innerText = movie.Year;
        releaseYear.classList.add('movie-card__year');
    const movieCard = document.createElement('a');
        movieCard.classList.add('movie-card');
        movieCard.setAttribute("href", `./moviePage.html?id=${movie.imdbID}`);
        movieCard.appendChild(title);
        movieCard.appendChild(releaseYear);
        movieCard.append(star);
        if (movie.Poster != "N/A") {
            movieCard.style.background = `URL(${movie.Poster}) no-repeat center center/cover`;
        } else {
            movieCard.style.background = `URL(${NO_POSTER_URL}) no-repeat center center/cover`;
        }
    document.querySelector('#movie-list').appendChild(movieCard);
    //adding event listeners
    movieCard.addEventListener('mouseover', (e) => {
        if(e.target === movieCard) {
            e.target.children[2].classList.add('movie-card__star-hover');
        }
    })  
    movieCard.addEventListener('mouseleave', (e) => {
        if(e.target === movieCard) {
            e.target.children[2].classList.remove('movie-card__star-hover');
        }
    })   

    star.addEventListener('click', (e) => {
        e.preventDefault();
        //console.log(movie.Title);
        const movieDescr = {
            Title: movie.Title,
            ImdbId: movie.imdbID
        }
        const currFaveMoviesArr = JSON.parse(localStorage.getItem('favoriteMovies'));

            if (e.target.classList.contains('movie-card__star-active')) {
                e.target.classList.remove('movie-card__star-active');
                e.target.innerText = '☆';
                
                if(currFaveMoviesArr) {
                    for (let i=0; i <= currFaveMoviesArr.length; i++) {
                        if(movie.Title == currFaveMoviesArr[i].Title) {
                           if(currFaveMoviesArr.length > 1) {
                            currFaveMoviesArr.splice(i, i);
                            console.log(currFaveMoviesArr);
                           } else {
                            currFaveMoviesArr.length = 0;
                           }
                        }
                    }
                    localStorage.setItem('favoriteMovies', JSON.stringify(currFaveMoviesArr));
                } 
                //localStorage.removeItem('favoriteMovies');
                //console.log(JSON.parse(localStorage.getItem('favoriteMovies')));
            } else {
                e.target.classList.add('movie-card__star-active');
                e.target.innerText = '★';
                if(!currFaveMoviesArr) {
                    faveMoviesArr.push(movieDescr);
                    localStorage.setItem('favoriteMovies', JSON.stringify(faveMoviesArr));
                } else {
                    const currFaveMoviesArr = JSON.parse(localStorage.getItem('favoriteMovies'));
                    console.log(currFaveMoviesArr);
                    currFaveMoviesArr.push(movieDescr);
                    localStorage.setItem('favoriteMovies', JSON.stringify(currFaveMoviesArr));
                }
            }
        })      
}


/**
 * This function is suppused to render a block with pages numbers and put on them event listener so every time you click on it, it inits search on target page
 * @param {number} numberOfPages 
 */
function movieListPagesNumbersRender(numberOfPages) {

    const moviePagesContainer = document.createElement('div'),
        movieSectionContainer = document.querySelector('#movie-list');
    moviePagesContainer.classList.add('movie-list__pages-container');
    movieSectionContainer.append(moviePagesContainer);

    for(let i = 1; i <= numberOfPages; i++) {
        const moviePageNumber = document.createElement('div');
        moviePageNumber.innerText = `${i}`;
        moviePageNumber.classList.add('movie-list__page-icon');
        moviePagesContainer.append(moviePageNumber);
        moviePageNumber.addEventListener('click', (e) => {
            let searchInput = document.querySelector('.search-bar__input').value;
            if(!searchInput) {
                searchInput = 'movie';
            }
            handleMovieSearch(e.target.innerText, searchInput);
        })
    }
}

/** this function sends request to the API and gets the movie list */
async function getMovieList(currPage = 1, searchValue='movie') {
  
    const URL = `https://www.omdbapi.com/?s=${searchValue}&page=${currPage}&apikey=${MOVIES_API_KEY}`;
    const res = await fetch(`${URL}`);
    const movieList = await res.json();
    if (movieList.Response === 'True'){
        movieList.Search.length = 9;
        movieList.Search.forEach(appendMovieCard);
        const numOfPages = Math.ceil(movieList.totalResults / 10);
        movieListPagesNumbersRender(numOfPages);
        //changing active class for rendered page numbers
        const pagesNumbers = document.querySelectorAll('.movie-list__page-icon'),
            firstPageNumber = document.querySelector('.movie-list__page-icon');
        if(currPage === 1) {
            firstPageNumber.classList.add('movie-list__page-icon-active');
        } else if(currPage === numOfPages) {
            pagesNumbers[pagesNumbers.length - 1].classList.add('movie-list__page-icon-active');
        }else {
            pagesNumbers.forEach(item => {
                if(item.innerText === currPage) {
                    item.classList.add('movie-list__page-icon-active');
                }
            })
        }
        pagesNumbers.forEach(item => {
            if(+item.innerText > (+currPage + 2) || +item.innerText < (+currPage - 2)) {
                item.classList.add('movie-list__page-icon-hidden');
            } else {
                item.classList.remove('movie-list__page-icon-hidden');
            }
        });
        if(pagesNumbers[0].classList.contains('movie-list__page-icon-hidden')) {
            const marginalLeftPageArrow = document.createElement('div'),
                pagesContainer = document.querySelector('.movie-list__pages-container');
            let searchBarInput = document.querySelector('.search-bar__input');
                if(!searchBarInput.value) {
                    searchBarInput.value = 'Movie';
                };


                marginalLeftPageArrow.classList.add('movie-list__page-arrow');
                marginalLeftPageArrow.innerHTML = '&#10094&#10094';

                pagesContainer.prepend(marginalLeftPageArrow);

                marginalLeftPageArrow.addEventListener('click', () => {
                    handleMovieSearch(1, searchBarInput.value);
                });
        }
         if (pagesNumbers[pagesNumbers.length - 1].classList.contains('movie-list__page-icon-hidden')) {
            const marginalRightPageArrow = document.createElement('div'),
                pagesContainer = document.querySelector('.movie-list__pages-container');
            let searchBarInput = document.querySelector('.search-bar__input');
                if(!searchBarInput.value) {
                    searchBarInput.value = 'Movie';
                };


                marginalRightPageArrow.classList.add('movie-list__page-arrow');
                marginalRightPageArrow.innerHTML = '&#10095&#10095';

                pagesContainer.append(marginalRightPageArrow);

                marginalRightPageArrow.addEventListener('click', () => {

                    handleMovieSearch(numOfPages, searchBarInput.value);
                });
        }

        //temp

        renderFavoriteMovieCards('https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg', 'Title', 'Movie', 'tt1490017');
        renderFavoriteMovieCards('https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg', 'Title', 'Movie', 'tt1490017'); 
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
function handleMovieSearch(pageNumber, inputValue) {
    clearMovieList();
    getMovieList(pageNumber, inputValue);
}
