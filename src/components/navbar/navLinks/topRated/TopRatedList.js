import axios from "axios";
import { useState, useEffect } from "react";
import TopRatedCard from "./TopRatedCard";

function TopRatedList(){

    const [movieCard, setMovieCard] = useState();

    const fetchMovieCard = () => {
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=dc0fb7b28045cd04916b73e857aec4f9')
        .then(response => setMovieCard(response.data.results))
    }
    
    useEffect(() => {
        fetchMovieCard()
    })

    return(
        <div className="movies-container">
            <h1 className='header'>Top Rated Movies</h1>
            <div className='buttons-container'>
                <button className='previous-button button' >Previous</button>
                <button className='next-button button'>Next</button>
            </div>  
            <div className="cards-container">
                {movieCard?.map(items => <TopRatedCard {...items}/>)}
            </div>
            <div className='buttons-container'>
                <button className='previous-button button' >Previous</button>
                <button className='next-button button'>Next</button>
            </div>  
        </div>
    )
}

export default TopRatedList