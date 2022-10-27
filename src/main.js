import './movie-container.js';
import genres from './data/genres-data.js';
import MovieData from './data/movie-data.js';

const main = () => {
    const KEY = 'api_key=32d35d1635fdcb0a5702bfaf481587f4';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const API_URL = BASE_URL+'/discover/movie?sort_by=popularity.desc&'+KEY;
    const searchURL = BASE_URL + '/search/movie?'+KEY;

    const movieContainerElement = document.querySelector('.movie-container');
    const formElement = document.getElementById('search-form');
    const search = document.getElementById('searchElement');
    
    const genreElement = document.getElementById('genres');
    const selectedGenre = []

    const setGenres= () =>{
        genreElement.innerHTML = '';
        genres.forEach(genre => {
            const item = document.createElement('div');
            item.classList.add('genre');
            item.id = genre.id;
            item.innerText = genre.name;
            item.addEventListener('click', () => {
                if(selectedGenre.length == 0){
                    selectedGenre.push(genre.id);
                }else{
                    if(selectedGenre.includes(genre.id)){
                        selectedGenre.forEach((id, index) => {
                            if(id == genre.id){
                                selectedGenre.splice(index, 1);
                            }
                        })
                    }else{
                        selectedGenre.push(genre.id);
                    }
                }
                console.log(selectedGenre);
                getMovies(API_URL + '&with_genres='+encodeURI(selectedGenre.join(','))); //menggabungkan array yang berisi id ke 1 string dan dibatasi dengan koma
                activeGenre();
            })
            genreElement.append(item);
        })
    }

    setGenres();

    const activeGenre = () => {
        const genreitem = document.querySelectorAll('.genre');
        genreitem.forEach(genre => {
            genre.classList.remove('highlight')
        })

        if(selectedGenre.length != 0){
            selectedGenre.forEach(id => {
                const highlightgenre = document.getElementById(id);
                highlightgenre.classList.add('highlight');
            })
        }
    }
    
    const getMovies = async (url) => {
        try {
            const result = await MovieData.getMovies(url);
            console.log(result);
            renderAllMovie(result);
        } catch (message) {
            console.log(message);
        }
    }
    getMovies(API_URL);

    const movieItem = document.querySelector('movie-item');
    const renderAllMovie = (movies) => {
        // movieContainerElement.movies = movies;

        // Kode dibawah ini tanpa menggunkana custom element
        movieContainerElement.innerHTML = '';
        movies.forEach(movie => {
            const {title, poster_path, vote_average, overview} = movie;

            const item = document.createElement('div');
            item.classList.add('movie-item');
            item.innerHTML = `
                <img src="${IMG_URL+poster_path}" alt="${title}">

                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getColor(vote_average)}">${vote_average}</span>
                </div>

                <div class="description">
                    ${overview}
                </div>
            `

            movieContainerElement.appendChild(item);
        })
    }

    const getColor = (vote => {
        if(vote >= 8){
            return 'green'
        }else if(vote >= 5){
            return 'orange'
        }else {
            return 'red'
        }
    });

    formElement.addEventListener('submit',(event) => {
        event.preventDefault();

        const keyword = search.value;

        if(keyword) {
            getMovies(searchURL+'&query='+keyword);
        }else {
            getMovies(API_URL);
        }
    })
    

}

export default main;