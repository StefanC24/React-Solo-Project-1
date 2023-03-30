import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import './MovieDetails.css'

function MovieDetails(){
    const {id} = useParams()
    const [movieDetails, setMovieDetails] = useState()

    const fetchDetails = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=dc0fb7b28045cd04916b73e857aec4f9`)
            .then(response => setMovieDetails(response.data))
    }

    useEffect(() => {
        fetchDetails()
    },);

    return(
         <div className='card-details-container'>   
            <div className='cards-details'>
                <img className='details-movie-poster' src = {`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`} alt = {movieDetails?.title} ></img>
                <p>{movieDetails?.title}</p>
                <p>{movieDetails?.release_date}</p>
                <p>{movieDetails?.vote_average}/10 stars</p>
                <p>{movieDetails?.overview}</p>
            </div>
        </div>
    )
}
export default MovieDetails;