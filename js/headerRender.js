import { LOGO_MAIN } from './constants.js';
/**
 * This function proceduraly adds a header to the page, it needs some styles from global.css
 */

export function headerRender() {
  const header = document.createElement('header'),
    headerContainer = document.createElement('div'),
    logoContainer = document.createElement('a'),
    favoritesBtn = document.createElement('div'),
    favoriteSection = document.createElement('div'),
    favoriteMoviesContainer = document.createElement('div'),
    favoriteBtnsContainer = document.createElement('div'),
    favoriteCloseBtn = document.createElement('div'),
    favoriteResetAllBtn = document.createElement('div');

  header.classList.add('header');
  headerContainer.classList.add('header__container');
  logoContainer.classList.add('header__logo');
  logoContainer.innerHTML = `${LOGO_MAIN}`;
  logoContainer.href = '../index.html';

  favoritesBtn.classList.add('header__favorite-btn');
  favoritesBtn.innerText = 'Favorites';
  favoriteSection.classList.add('header__favorite-section');
  favoriteBtnsContainer.classList.add('header__favorite-section__btns-container');
  favoriteMoviesContainer.classList.add('header__favorite-section__movies-container');
  favoriteMoviesContainer.innerText = 'No movies added yet, choose wisely';
  favoriteCloseBtn.classList.add('header__favorite-section__close-btn');
  favoriteResetAllBtn.classList.add('header__favorite-section__reset-btn');
  favoriteCloseBtn.innerText = 'Close';
  favoriteResetAllBtn.innerText = 'Reset all';
  favoriteBtnsContainer.append(favoriteResetAllBtn, favoriteCloseBtn);
  favoriteSection.append(favoriteMoviesContainer, favoriteBtnsContainer);
  favoritesBtn.append(favoriteSection);

  headerContainer.append(logoContainer, favoritesBtn);
  header.append(headerContainer);
  const body = document.querySelector('body');
  body.appendChild(header);

  favoritesBtn.addEventListener('click', (e) => {
    if (e.target === favoritesBtn && e.target.classList.contains('header__favorite-btn--active')) {
      e.target.classList.remove('header__favorite-btn--active');
      favoriteSection.classList.remove('header__favorite-section--active');
    } else if (e.target === favoritesBtn && !e.target.classList.contains('header__favorite-btn--active')) {
      e.target.classList.add('header__favorite-btn--active');
      favoriteSection.classList.add('header__favorite-section--active');
      renderFaveMovieCard();
    }
  });

  favoriteCloseBtn.addEventListener('click', (e) => {
    if (e.target === favoriteCloseBtn && favoritesBtn.classList.contains('header__favorite-btn--active')) {
      favoriteSection.classList.remove('header__favorite-section--active');
      favoritesBtn.classList.remove('header__favorite-btn--active');
    }
  });

  favoriteResetAllBtn.addEventListener('click', (e) => {
    if (e.target === favoriteResetAllBtn) {
      const emptyMovieArr = [];
      localStorage.setItem('favoriteMovies', JSON.stringify(emptyMovieArr));
      favoriteMoviesContainer.innerHTML = 'No movies added yet, choose wisely';
      const activeStars = document.querySelectorAll('.movie-card__star--active');
      activeStars.forEach((item) => {
        item.classList.remove('movie-card__star--active');
        item.innerText = '☆';
      });
    }
  });
}

export function renderFaveMovieCard() {
  const favoriteMoviesContainer = document.querySelector('.header__favorite-section__movies-container');
  let currFaveMoviesArr = JSON.parse(localStorage.getItem('favoriteMovies'));
  favoriteMoviesContainer.innerHTML = '';
  if (currFaveMoviesArr && currFaveMoviesArr.length > 0) {
    currFaveMoviesArr.forEach((item) => {
      appendFavoriteMovieCard(item);
    });
  } else {
    favoriteMoviesContainer.innerHTML = 'No movies found';
  }
}

function removeMovieCardFromLocalstorage(arr, Id) {
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Id == arr[i].ImdbId) {
        arr.splice(i, 1);
      }
      localStorage.setItem('favoriteMovies', JSON.stringify(arr));
    }
  }
}

export function appendFavoriteMovieCard(movieInfo) {
  const faveMovieCard = document.createElement('a'),
    faveMoviePoster = document.createElement('div'),
    faveMovieTitle = document.createElement('div'),
    faveMovieType = document.createElement('div'),
    faveMovieYear = document.createElement('div'),
    faveMovieDelete = document.createElement('div'),
    favoriteMoviesContainer = document.querySelector('.header__favorite-section__movies-container');

  faveMovieCard.classList.add('header__favorite-section__movie-card');
  faveMovieDelete.classList.add('header__favorite-section__movie-card__delete');
  faveMovieDelete.innerHTML = '&#10006';
  faveMoviePoster.classList.add('header__favorite-section__movie-card__poster');
  faveMovieTitle.classList.add('header__favorite-section__movie-card__title');
  faveMovieType.classList.add('header__favorite-section__movie-card__text');
  faveMovieYear.classList.add('header__favorite-section__movie-card__text');
  faveMovieYear.innerText = `${movieInfo.Year}`;
  faveMovieTitle.innerText = `${movieInfo.Title}`;
  faveMovieType.innerText = `${movieInfo.Type}`;
  faveMovieCard.setAttribute('href', `../moviePage.html?id=${movieInfo.ImdbId}`);
  if (movieInfo.Poster != 'N/A') {
    faveMoviePoster.style.background = `URL(${movieInfo.Poster}) no-repeat center center/cover`;
  } else {
    faveMoviePoster.style.background = `URL(${NO_POSTER_URL}) no-repeat center center/cover`;
  }
  faveMovieCard.append(faveMoviePoster, faveMovieTitle, faveMovieYear, faveMovieType, faveMovieDelete);
  favoriteMoviesContainer.append(faveMovieCard);

  faveMovieDelete.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target === faveMovieDelete) {
      const currFaveMoviesArr = JSON.parse(localStorage.getItem('favoriteMovies')),
        currFaveCards = document.querySelectorAll('.header__favorite-section__movie-card'),
        landingPageMovieCards = document.querySelectorAll('.movie-card');
      removeMovieCardFromLocalstorage(currFaveMoviesArr, movieInfo.ImdbId);
      currFaveCards.forEach((item) => {
        if (e.target.parentElement === item) {
          favoriteMoviesContainer.removeChild(item);
          if (!favoriteMoviesContainer.innerHTML) {
            favoriteMoviesContainer.innerHTML = 'No movies found';
          }
        }
      });
      landingPageMovieCards.forEach((item) => {
        if (
          item.children[0].innerText === movieInfo.Title &&
          item.children[2].classList.contains('movie-card__star--active')
        ) {
          item.children[2].classList.remove('movie-card__star--active');
          item.children[2].innerText = '☆';
        }
      });
    }
  });
}
