import React from 'react'
import axios from 'axios'
import MovieCard from '../movie card/MovieCard'
import './MovieList.css'
function MovieList(){

    const [movie, setMovie] = React.useState()

    React.useEffect(()=>
        fetchMovies()
    , [])

    const fetchMovies = () => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=dc0fb7b28045cd04916b73e857aec4f9')
        .then(response => setMovie(response.data.results))
    }

    return (
        <div className='movies-container'>
            {movie?.map(item => <MovieCard {...item}/>)}
        </div>
    )
}
export default MovieList