import React, { Component } from 'react';
import axios from 'axios';
import config from './config';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            movieList: []
        }
    }
    componentDidMount() {
        const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.api_key}`;
        axios.get(nowPlayingUrl).then((response) => {
            // console.log(response.data);
            const movieData = response.data.results;
            this.setState({
                movieList: movieData
            })
        })
    }

    render() {
        // console.log(this.state.movieList);
        const imageUrl = 'http://image.tmdb.org/t/p/w300'
        const movieGrid = this.state.movieList.map((movie, i) => {
            return (
                <div className="col s3" key={i}>
                    <img src={`${imageUrl}${movie.poster_path}`} />
                </div>
            );
        })
        return (
            <div className="row">
                {movieGrid}
            </div>
        );
    }
}

export default Home;

// const apiKey = "fec8b5ab27b292a68294261bb21b04a5";
// const singleMovieUrl = "https://api.themoviedb.org/3/movie/"
// const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing";
// const imageUrl = "http://image.tmdb.org/t/p/w300";