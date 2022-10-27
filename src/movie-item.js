import MovieData from "./data/movie-data";
class MovieItem extends HTMLElement {

    set movie(data) {
        this._data = data;
        this.render();
    }
    render(){
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin : 0;
                padding : 0;
            }
                :host {
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }
            .movie-info {
                color: white;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.5rem 1rem 1rem;
                letter-spacing: 0.5px;
            }
        
            .movie-info h3 {
                margin-top: 0;
            }
            
            .movie-info span {
                background-color: #145455;
                padding: 0.25rem 0.5rem;
                border-radius: 3px;
                font-weight: bold;
            }
        
            .movie-info span.green {
                    color: lightgreen;
            }
            .movie-info span.orange {
                    color: orange;
            }
            .movie-info span.red {
                    color: red;
            }
            
            .description {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: white;
                    padding: 1rem;
                    max-height: 100%;
                    transform: translateY(101%);
                    transition: .2s ease;
            }
        </style>

            <img src="${'https://image.tmdb.org/t/p/w500'+this._data.poster_path}" alt="${this._data.title}">

            <div class="movie-info">
                <h3>${this._data.title}</h3>
                <span class="${getColor(this._data.vote_average)}">${this._data.vote_average}</span>
            </div>

            <div class="description">
                ${this._data.overview}
            </div>
    `
        ;
    }
}

customElements.define('movie-item',MovieItem);