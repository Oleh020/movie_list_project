import MOVIES_API_KEY from "./key.js";
import NO_POSTER_URL from "./constants.js"


/** this function gets an id from URL parameters of the page */
function getMovieId() {
    const queryString = window.location.search,
         urlParams = new URLSearchParams(queryString),
         id = urlParams.get('id');
    return id;
}

/** this function receives object with information and renders it on the page */
function renderMovieInfo(movieInformation) {
    const movieCard = document.querySelector('#movie__info');

    const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie__info-container');

    const plotContainer = document.createElement('div');
        plotContainer.classList.add('movie__info-plot');
        
    const poster = document.createElement('div');
        poster.classList.add('movie__info-poster')
        if (movieInformation.Poster != 'N/A') {
            poster.style.background = `URL(${movieInformation.Poster}) no-repeat center center/cover`;
        } else {
            poster.style.background = `URL(${NO_POSTER_URL}) no-repeat center center/cover`;
        }

    movieContainer.appendChild(poster);
    const descrBlock = document.createElement('div');
    descrBlock.classList.add('movie__info-descr');

    const title = document.createElement('div');
        title.innerText = movieInformation.Title;
        title.classList.add('movie__info-title');
        descrBlock.appendChild(title);
    const genre = document.createElement('div');
        genre.classList.add('movie__info-param');
        genre.innerHTML = `<span class = 'movie__info-general-subtitle'>Genre: </span> ${movieInformation.Genre} `;
        
        descrBlock.appendChild(genre);
    const releaseDate = document.createElement('div');
        releaseDate.classList.add('movie__info-param');
        releaseDate.innerHTML = `<span class = 'movie__info-general-subtitle'>Release date: </span> ${movieInformation.Released} `;
        
        descrBlock.appendChild(releaseDate);
    const runtime = document.createElement('div');
        runtime.classList.add('movie__info-param');
        runtime.innerHTML = `<span class = 'movie__info-general-subtitle'>Runtime: </span> ${movieInformation.Runtime} `;
        
        descrBlock.appendChild(runtime);
    const director = document.createElement('div');
        director.classList.add('movie__info-param');
        director.innerHTML = `<span class = 'movie__info-general-subtitle'>Director: </span> ${movieInformation.Director} `;
        
        descrBlock.appendChild(director);
    const writer = document.createElement('div');
        writer.classList.add('movie__info-param');
        writer.innerHTML = `<span class = 'movie__info-general-subtitle'>Writer: </span> ${movieInformation.Writer} `;
        
        descrBlock.appendChild(writer);
    const actors = document.createElement('div');
        actors.classList.add('movie__info-param');
        actors.innerHTML = `<span class = 'movie__info-general-subtitle'>Actors: </span> ${movieInformation.Actors} `;
        
        descrBlock.appendChild(actors);
    const imdbRating = document.createElement('div');
        imdbRating.classList.add('movie__info-param');
        imdbRating.innerHTML = `<span class = 'movie__info-general-subtitle'>imdbRating: &#9733 </span> ${movieInformation.imdbRating} `;
        
        descrBlock.appendChild(imdbRating);
    const metascore = document.createElement('div');
        metascore.classList.add('movie__info-param');
        if(movieInformation.Metascore != "N/A") {
            metascore.innerHTML = `<span class = 'movie__info-general-subtitle'>Metascore: &#9733 </span> ${movieInformation.Metascore} `;
        } else {
            metascore.innerHTML = `<span class = 'movie__info-general-subtitle'>Metascore: &#9733 </span> __ `;
        }
        
        descrBlock.appendChild(metascore);
    const boxOffice = document.createElement('div');
        boxOffice.classList.add('movie__info-param');
        if(movieInformation.BoxOffice != "N/A") {
            boxOffice.innerHTML = `<span class = 'movie__info-general-subtitle'>Box office: </span> ${movieInformation.BoxOffice} `;
        } else {
            boxOffice.innerHTML = `<span class = 'movie__info-general-subtitle'>Box office: </span> __ `;
        }
        
        descrBlock.appendChild(boxOffice);
    movieContainer.appendChild(descrBlock);

    const plotPref = document.createElement('div');
        plotPref.classList.add('movie__info-general-subtitle');
        plotPref.innerText = 'Movie plot:';

    const plot = document.createElement('div');
        plot.classList.add('movie__info-param');
        plot.style.textAlign = 'center';
        plot.innerText = movieInformation.Plot;

    plotContainer.append(plotPref, plot);


    movieCard.append(movieContainer, plotContainer);
}

/** this function sends request to the API and gets the movie information by movie imdbID and initialize rendering function*/
async function getMovieInfo(imdbID) {
  
    const URL = `https://www.omdbapi.com/?i=${imdbID}&apikey=${MOVIES_API_KEY}`;
    const res = await fetch(`${URL}`);
    const movieInfo = await res.json();
    renderMovieInfo(movieInfo);
};

getMovieInfo(getMovieId());


