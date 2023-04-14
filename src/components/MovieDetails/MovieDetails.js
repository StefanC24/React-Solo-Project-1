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
        console.log("render")
      // eslint-disable-next-line 
    },[]);

    return(
         <div className='card-details-container'>   
            <div className='cards-details'>
                <div>
                    <img className='details-movie-poster' 
                        src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`} 
                        alt = {movieDetails?.title} ></img>
                    <p className='details-movie-title'>{movieDetails?.title}</p>
                    <p className='details-release-date'>{movieDetails?.release_date}</p>
                    <p className='details-rating'>{movieDetails?.vote_average}/10 stars</p>
                </div>
                <p className='overview'>{movieDetails?.overview}</p>
            </div>
        </div>
    )
}
export default MovieDetails;