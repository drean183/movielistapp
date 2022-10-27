
class MovieData {
    static getMovies(url) {
        return fetch(url)
        .then(response =>  {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(console.log("Error Getting Data"));
            }
        });
    }
}

export default MovieData;