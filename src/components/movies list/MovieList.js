import React from 'react'
import axios from 'axios'
import MovieCard from '../movie card/MovieCard'
import './MovieList.css'
function MovieList(){

    const [movie, setMovie] = React.useState()
    const [currentPage, setCurrentPage] = React.useState(1)
  
    React.useEffect(()=>
        fetchMovies(1)
    , [])

    
    const fetchMovies = (currentPageNumber) => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=dc0fb7b28045cd04916b73e857aec4f9')
        .then(response => 
            setMovie(response.data.results))
            setCurrentPage(currentPageNumber)
    }
    
    const changePage = (currentPageNumber, direction) => {
       if(currentPageNumber === 1 && direction === 'previous'){
        return
       }

       if(direction === 'next'){
        fetchMovies(currentPageNumber + 1)
       }
       else if(direction === 'previous'){
        fetchMovies(currentPageNumber - 1)
       }
    }


    return (
        <div className='movies-container'>
            <h1>Most popular</h1>
            <button onClick={() => changePage(currentPage, 'previous')}>Previous</button>
            <button onClick={() =>  changePage(currentPage, 'next')}>Next</button>
            <div className='cards-container'>
                {movie?.map(item => <MovieCard {...item}/>)}
            </div>
        </div>
    )
}
export default MovieList