import './movie-item.js';
class movieList extends HTMLElement{

    set movies(movies){
        this._movies = movies;
        this.render;
    }

    render(){
        this.shadowDOM.innerHTML = '';
        this._movies.forEach(item => {
            const movieItem = document.createElement('movie-item');
            movieItem.movie = item;
            this.shadowDOM.appendChild(movieItem);
        });
    }
}

customElements.define('movie-container',movieList);