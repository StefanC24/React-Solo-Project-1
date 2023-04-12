import React from 'react'
import axios from 'axios'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'
function MovieList(){

    const [movies, setMovies] = React.useState()
    const [currentPage, setCurrentPage] = React.useState(1)
    const [input, setInput] = React.useState("")
  
    React.useEffect(()=>fetchMovies(1),[]);

    
    const fetchMovies = (currentPageNumber) => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=dc0fb7b28045cd04916b73e857aec4f9&page=${currentPageNumber}`)
        .then(response => 
            setMovies(response.data.results))
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
            <h1 className='header'>Most popular</h1>
            <input className='search' onChange={(event)=>setInput(event.target.value)} type='text'placeholder='Search'></input>
            <div className='buttons-container'>
                <button className='previous-button button' onClick={() => changePage(currentPage, 'previous')}>Previous</button>
                <button className='next-button button' onClick={() =>  changePage(currentPage, 'next')}>Next</button>
            </div>  
            <div className='cards-container'>
                {movies?.filter((item)=>{
                    return input.toLowerCase() === "" 
                    ? 
                    item : item.title.toLowerCase().includes(input)
                }).map(item => <MovieCard {...item} />)}
            </div>
            <div className='buttons-container'>
                <button className='previous-button button' onClick={() => changePage(currentPage, 'previous')}>Previous</button>
                <button className='next-button button' onClick={() =>  changePage(currentPage, 'next')}>Next</button>
            </div>  
        </div>
    )
}
export default MovieList