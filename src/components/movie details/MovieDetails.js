import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
function MovieDetails(){
    const {id} = useParams()
    const [movieDetails, setMovieDetails] = useState()

    const fetchDetails = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=dc0fb7b28045cd04916b73e857aec4f9`)
            .then(response => setMovieDetails(response.data))
    }

    useEffect(() => {
        fetchDetails()
    });

    return(
        <div>
            <img className='movie-poster' src = {movieDetails?.poster_path} alt = {movieDetails?.title} ></img>
            <p>{movieDetails?.title}</p>
            <p>{movieDetails?.release_date}</p>
            <p>{movieDetails?.vote_average}/10 stars</p>
        </div>
    )
}
export default MovieDetails;