const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
/*api is subdomain   .themoviedb. then 3 bcse its version of api  then i sort movie by populairty then ampercent and put our api_key=value of api but this will give tons of result then we create page=1 */
// this will give data in json form
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'//last one is size so set size accrdnlgly last m se slash bhi uda deya bcse json wali file m start m slash tha
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
// search api same as api_url make some modfic and at last add query and just open a double single quote bcse i want to able to concate a search term from search box into here

const main = document.getElementById('main')
 const form = document.getElementById('form')
 const search = document.getElementById('search')

// // Get initial movies
 getMovies(API_URL)

async function getMovies(url) {
       const res = await fetch(url) //fetch returns a promise
       const data = await res.json()

   showMovies(data.results)
   //results bcse remember the response in browser had a results it had results array
}

function showMovies(movies) {
    main.innerHTML = ''        //first clear main part bcse we intially list movies but when we searh we dont want to add them on the movies that are already here

   movies.forEach((movie) => {
    // now using destructing so to do this we can pull values out of movie object bcse that what movie is
          const { title, poster_path, vote_average, overview } = movie //movie is an object will all movie data

           const movieEl = document.createElement('div') // createing div and putting real data into dom
            movieEl.classList.add('movie')

        movieEl.innerHTML = `
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
        //and now we have to put in dom so take main and append to it
         main.appendChild(movieEl) 
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
   e.preventDefault()

     const searchTerm = search.value

     if(searchTerm && searchTerm !== '') {
       getMovies(SEARCH_API + searchTerm)
       //so this will give us response and then we will clear search .dot value

     search.value = ''
    } else { // if we submit without having anything it will reload page
      window.location.reload()
  }
 })