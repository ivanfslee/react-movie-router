import React, { Component } from 'react';
import config from './config';
import axios from 'axios';

class Movie extends Component {
    constructor() {
        super();
        this.state = {
            movie: {}
        }
    }

    componentDidMount() {
        const mid = this.props.match.params.movieId;
        const singleMovieUrl = `https://api.themoviedb.org/3/movie/${mid}?api_key=${config.api_key}`;
        axios.get(singleMovieUrl).then(response => {
            // console.log(response.data);
            this.setState({
                movie: response.data
            })
        })
    }

    render() {
        // console.log('match obj', this.props.match);

        //these props like match are provided by Route/Router in App.js
        //https://www.freecodecamp.org/news/hitchhikers-guide-to-react-router-v4-4b12e369d10/
        console.log('props of movie compo', this.props)
        if (this.state.movie.title === undefined) {
            return (<h1>Loading...</h1>)
        }
        const movie = this.state.movie;
        const imageUrl = `http://image.tmdb.org/t/p/w300${movie.poster_path}`;
        return (
            // <h1>{this.props.match.params.movieId}</h1>
            <div>
                <img alt="movie poster" src={imageUrl} />
                <p>{movie.title}</p>
                <p>{movie.overview}</p>
                <p>{movie.budget}</p>
                <p>{movie.tagline}</p>
            </div>
        );
    }
}

export default Movie;