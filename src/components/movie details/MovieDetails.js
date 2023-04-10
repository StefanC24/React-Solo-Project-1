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

    // TODO: This should have an empty array after the comma as we only want it to run on page load
    useEffect(() => {
        fetchDetails()
    },);

    return(
         <div className='card-details-container'>   
            <div className='cards-details'>
                {/* TODO: Break these attributes onto new lines in order to improve readability */}
                <img className='details-movie-poster' src = {`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`} alt = {movieDetails?.title} ></img>
                {/* TODO: Remove the empty space before and after the className */}
                <p className = 'details-movie-title'>{movieDetails?.title}</p>
                <p className = 'details-release-date'>{movieDetails?.release_date}</p>
                <p className = 'details-rating'>{movieDetails?.vote_average}/10 stars</p>
                <p className = 'overview'>{movieDetails?.overview}</p>
            </div>
        </div>
    )
}
export default MovieDetails;