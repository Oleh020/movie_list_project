import MOVIES_API_KEY from './key.js';
import { NO_POSTER_URL } from './constants.js';
import { headerRender, renderFaveMovieCard, removeMovieCardFromLocalstorage } from './headerRender.js';

const body = document.querySelector('body');

//At first function that creates header initializes
headerRender();

/** this function gets movie information and sets page title equals to movie title */
function changePageTitleToMovieTitle(movieInformation) {
  const title = document.querySelector('title');
  title.innerText = movieInformation.Title;
}

/** this function gets an id from URL parameters of the page */
function getMovieId() {
  const queryString = window.location.search,
    urlParams = new URLSearchParams(queryString),
    id = urlParams.get('id');
  return id;
}

/** this function receives object with information and renders it on the page */
function renderMovieInfo(movieInformation) {
  const movieCard = document.createElement('section');
  movieCard.id = 'movie-descr';
  body.append(movieCard);

  const movieContainer = document.createElement('div');
  movieContainer.classList.add('movie-descr__container');

  const plotContainer = document.createElement('div');
  plotContainer.classList.add('movie-descr__plot');

  const poster = document.createElement('div');
  poster.classList.add('movie-descr__poster');
  if (movieInformation.Poster != 'N/A') {
    poster.style.background = `URL(${movieInformation.Poster}) no-repeat center center/cover`;
  } else {
    poster.style.background = `URL(${NO_POSTER_URL}) no-repeat center center/cover`;
  }

  const onPosterFaveCheckButton = document.createElement('div');
  onPosterFaveCheckButton.classList.add('movie-descr__poster-fave-button');
  onPosterFaveCheckButton.innerText = 'Add to favorites ☆';
  poster.appendChild(onPosterFaveCheckButton);

  const currFaveMoviesArr = JSON.parse(localStorage.getItem('favoriteMovies'));
  currFaveMoviesArr.forEach((item) => {
    if (item.ImdbId === movieInformation.imdbID) {
      onPosterFaveCheckButton.classList.add('movie-descr__poster-fave-button--active');
    }
  });
  //adding event listeners on passive button state

  onPosterFaveCheckButton.addEventListener('mouseover', (e) => {
    if (
      e.target === onPosterFaveCheckButton &&
      !onPosterFaveCheckButton.classList.contains('movie-descr__poster-fave-button--active')
    ) {
      e.target.classList.add('movie-descr__poster-fave-button--hover');
      e.target.innerText = 'Add to favorites ★';
    }
  });

  onPosterFaveCheckButton.addEventListener('mouseleave', (e) => {
    if (
      e.target === onPosterFaveCheckButton &&
      !onPosterFaveCheckButton.classList.contains('movie-descr__poster-fave-button--active')
    ) {
      e.target.classList.remove('movie-descr__poster-fave-button--hover');
      e.target.innerText = 'Add to favorites ☆';
    }
  });

  //adding event listeners on active button state

  onPosterFaveCheckButton.addEventListener('mouseover', (e) => {
    if (
      e.target === onPosterFaveCheckButton &&
      onPosterFaveCheckButton.classList.contains('movie-descr__poster-fave-button--active')
    ) {
      e.target.classList.add('movie-descr__poster-fave-button--active-hover');
      e.target.innerText = 'Don`t like this one ☆';
    }
  });

  onPosterFaveCheckButton.addEventListener('mouseleave', (e) => {
    if (
      e.target === onPosterFaveCheckButton &&
      !onPosterFaveCheckButton.classList.contains('movie-descr__poster-fave-button--active')
    ) {
      e.target.classList.remove('movie-descr__poster-fave-button--active-hover');
      e.target.innerText = 'Add to favorites ☆';
    } else {
      e.target.innerText = 'One of favorites ★';
      e.target.classList.remove('movie-descr__poster-fave-button--active-hover');
    }
  });

  //adding event listeners on click active/passive button state

  onPosterFaveCheckButton.addEventListener('click', (e) => {
    const movieDescr = {
      Title: movieInformation.Title,
      ImdbId: movieInformation.imdbID,
      Year: movieInformation.Year,
      Poster: movieInformation.Poster,
      Type: movieInformation.Type,
    };
    if (
      e.target === onPosterFaveCheckButton &&
      !onPosterFaveCheckButton.classList.contains('movie-descr__poster-fave-button--active')
    ) {
      e.target.classList.remove('movie-descr__poster-fave-button--hover');
      const currFaveMoviesArr = JSON.parse(localStorage.getItem('favoriteMovies'));
      onPosterFaveCheckButton.classList.add('movie-descr__poster-fave-button--active');
      e.target.innerText = 'One of favorites ★';
      currFaveMoviesArr.push(movieDescr);
      localStorage.setItem('favoriteMovies', JSON.stringify(currFaveMoviesArr));
      renderFaveMovieCard();
    } else {
      const currFaveMoviesArr = JSON.parse(localStorage.getItem('favoriteMovies'));
      onPosterFaveCheckButton.classList.remove('movie-descr__poster-fave-button--active');
      e.target.innerText = 'Add to favorites ☆';
      removeMovieCardFromLocalstorage(currFaveMoviesArr, movieInformation.imdbID);
      renderFaveMovieCard();
    }
  });

  movieContainer.appendChild(poster);
  const descrBlock = document.createElement('div');
  descrBlock.classList.add('movie-descr__block');

  const title = document.createElement('div');
  title.innerText = movieInformation.Title;
  title.classList.add('movie-descr__title');
  descrBlock.appendChild(title);
  const genre = document.createElement('div');
  genre.classList.add('movie-descr__param');
  genre.innerHTML = `<span class = 'movie-descr__general__subtitle'>Genre: </span> ${movieInformation.Genre} `;

  descrBlock.appendChild(genre);
  const releaseDate = document.createElement('div');
  releaseDate.classList.add('movie-descr__param');
  releaseDate.innerHTML = `<span class = 'movie-descr__general__subtitle'>Release date: </span> ${movieInformation.Released} `;

  descrBlock.appendChild(releaseDate);
  const runtime = document.createElement('div');
  runtime.classList.add('movie-descr__param');
  runtime.innerHTML = `<span class = 'movie-descr__general__subtitle'>Runtime: </span> ${movieInformation.Runtime} `;

  descrBlock.appendChild(runtime);
  const director = document.createElement('div');
  director.classList.add('movie-descr__param');
  director.innerHTML = `<span class = 'movie-descr__general__subtitle'>Director: </span> ${movieInformation.Director} `;

  descrBlock.appendChild(director);
  const writer = document.createElement('div');
  writer.classList.add('movie-descr__param');
  writer.innerHTML = `<span class = 'movie-descr__general__subtitle'>Writer: </span> ${movieInformation.Writer} `;

  descrBlock.appendChild(writer);
  const actors = document.createElement('div');
  actors.classList.add('movie-descr__param');
  actors.innerHTML = `<span class = 'movie-descr__general__subtitle'>Actors: </span> ${movieInformation.Actors} `;

  descrBlock.appendChild(actors);
  const imdbRating = document.createElement('div');
  imdbRating.classList.add('movie-descr__param');
  imdbRating.innerHTML = `<span class = 'movie-descr__general__subtitle'>imdbRating: &#9733 </span> ${movieInformation.imdbRating} `;

  descrBlock.appendChild(imdbRating);
  const metascore = document.createElement('div');
  metascore.classList.add('movie-descr__param');
  if (movieInformation.Metascore != 'N/A') {
    metascore.innerHTML = `<span class = 'movie-descr__general__subtitle'>Metascore: &#9733 </span> ${movieInformation.Metascore} `;
  } else {
    metascore.innerHTML = `<span class = 'movie-descr__general__subtitle'>Metascore: &#9733 </span> __ `;
  }

  descrBlock.appendChild(metascore);
  const boxOffice = document.createElement('div');
  boxOffice.classList.add('movie-descr__param');
  if (movieInformation.BoxOffice != 'N/A' && movieInformation.BoxOffice) {
    boxOffice.innerHTML = `<span class = 'movie-descr__general__subtitle'>Box office: </span> ${movieInformation.BoxOffice} `;
  } else {
    boxOffice.innerHTML = `<span class = 'movie-descr__general__subtitle'>Box office: </span> __ `;
  }

  descrBlock.appendChild(boxOffice);
  movieContainer.appendChild(descrBlock);

  const plotPref = document.createElement('div');
  plotPref.classList.add('movie-descr__general__subtitle');
  plotPref.innerText = 'Movie plot:';

  const plot = document.createElement('div');
  plot.classList.add('movie-descr__param');
  plot.innerText = movieInformation.Plot;

  plotContainer.append(plotPref, plot);

  movieCard.append(movieContainer, plotContainer);
}

/** this function sends request to the API and gets the movie information by movie imdbID and initialize rendering function*/
async function getMovieInfo(imdbID) {
  const URL = `https://www.omdbapi.com/?i=${imdbID}&apikey=${MOVIES_API_KEY}`;
  const res = await fetch(`${URL}`);
  const movieInfo = await res.json();
  return movieInfo;
}

const movieInfo = await getMovieInfo(getMovieId());

async function renderMoviePage(movieInformation) {
  await changePageTitleToMovieTitle(movieInformation);
  await renderMovieInfo(movieInformation);
}

renderMoviePage(movieInfo);
