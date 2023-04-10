import './MovieCard.css'
import { Link } from 'react-router-dom';

// Great us of props but the component folder name should be like the following:
// MovieCard instead of movie card
function MovieCard(props){
    return(
        <Link className="card-link" to={`/movie/${props.id}`}>   
            <img className='movie-poster'
                src = {`https://image.tmdb.org/t/p/w500/${props.poster_path}`} 
                alt = {props.title} >
                </img>
            <p className='movie-title'>{props.title}</p>
        </Link>
    )
}

export default MovieCard