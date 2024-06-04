const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2838e19881854431b204e47ac0d0d9b8&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2838e19881854431b204e47ac0d0d9b8&page=1'

const main = document.getElementById('main')
const from = document.getElementById('form')
const search = document.getElementById('search')

//get initial movies 
getMovies(API_URL)

async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json

    showMovies(data.result)
}

function showMovies(movies){
    MediaDeviceInfo.innerHTML = ''

    movies.forEach((movie) =>{
        const{ title, poster_path, vote_average, 
            overview} = movie

        const movieEl = document.createElement
        ('div')
        movieEl.classList.add(movie)

        movieEl.innerHTML=`
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
    `
    main.appendChild(movieEl)
    })
}

function getClassByRate(vote){
    if(vote >= 8){
        return 'green'
    } else if(vote >= 5){
        return 'orange'
    } else {
        return 'red'
    }
}

from.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else{
        Window.location.reload()
    }
})
