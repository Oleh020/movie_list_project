import {LOGO_MAIN} from './constants.js';

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

    favoritesBtn.addEventListener('click', e => {
        if(e.target === favoritesBtn && e.target.classList.contains('header__favorite-btn-active')) {
            e.target.classList.remove('header__favorite-btn-active');
            favoriteSection.classList.remove('header__favorite-section-active');
        } else if (e.target === favoritesBtn && !e.target.classList.contains('header__favorite-btn-active')){
            e.target.classList.add('header__favorite-btn-active');
            favoriteSection.classList.add('header__favorite-section-active');
        }
    })

    favoriteCloseBtn.addEventListener('click', e => {
        if(e.target === favoriteCloseBtn && favoritesBtn.classList.contains('header__favorite-btn-active')) {
            favoriteSection.classList.remove('header__favorite-section-active');
            favoritesBtn.classList.remove('header__favorite-btn-active');
        }
    });

    favoriteResetAllBtn.addEventListener('click', e => {
        if(e.target === favoriteResetAllBtn) {
            favoriteMoviesContainer.innerHTML = 'No movies added yet, choose wisely';
        } 
    })
}


export function renderFavoriteMovieCards(Poster, Title, Type, MovieId) {
    const faveMovieCard = document.createElement('a'),
        faveMoviePoster = document.createElement('div'),
        faveMovieTitle = document.createElement('div'),
        faveMovieType = document.createElement('div'),
        faveMovieDelete = document.createElement('div'),
        favoriteMoviesContainer = document.querySelector('.header__favorite-section__movies-container');

    faveMovieCard.classList.add('header__favorite-section__movie-card');
    faveMovieDelete.classList.add('header__favorite-section__movie-card__delete');
    faveMovieDelete.innerText = 'X';
    faveMoviePoster.classList.add('header__favorite-section__movie-card__poster');
    faveMovieTitle.classList.add('header__favorite-section__movie-card__title');
    faveMovieType.classList.add('header__favorite-section__movie-card__text');
    faveMovieTitle.innerText = `${Title}`;
    faveMovieType.innerText = `${Type}`;
    faveMovieCard.setAttribute("href", `../moviePage.html?id=${MovieId}`)
    if (Poster != "N/A") {
        faveMoviePoster.style.background = `URL(${Poster}) no-repeat center center/cover`;
    } else {
        faveMoviePoster.style.background = `URL(${NO_POSTER_URL}) no-repeat center center/cover`;
    }
    faveMovieCard.append(faveMoviePoster, faveMovieTitle, faveMovieType, faveMovieDelete);
    favoriteMoviesContainer.append(faveMovieCard);
}
