import axios from "axios";
import { useState, useEffect } from "react";
import TopRatedCard from "./TopRatedCard";

function TopRatedList(){

    const [movieCard, setMovieCard] = useState();
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        fetchMovieCard(1)
    },[])

    const handleClick = (currentPageNumber, direction) => {
        if(currentPageNumber === 1 && direction === 'previous'){
            return
        }
        if(direction === 'previous'){
           fetchMovieCard(currentPageNumber - 1);
        }
        else if(direction === 'next'){
            fetchMovieCard(currentPageNumber + 1);
        }
    }

    const fetchMovieCard = (currentPageNumber) => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=dc0fb7b28045cd04916b73e857aec4f9&page=${currentPageNumber}`)
        .then(response => 
            setMovieCard(response.data.results))
            setCurrentPage(currentPageNumber)

    }
    

    return(
        <div className="movies-container">
            <h1 className='header'>Top Rated</h1>
            <div className='buttons-container'>
                <button className='previous-button button' onClick={() => handleClick(currentPage, 'previous')} >Previous</button>
                <button className='next-button button' onClick={() => handleClick(currentPage, 'next')}>Next</button>
            </div>  
            <div className="cards-container">
                {movieCard?.map(items => <TopRatedCard {...items}/>)}
            </div>
            <div className='buttons-container'>
                <button className='previous-button button' onClick={() => handleClick(currentPage, 'previous')} >Previous</button>
                <button className='next-button button' onClick={() => handleClick(currentPage, 'next')}>Next</button>
            </div>  
        </div>
    )
}

export default TopRatedList