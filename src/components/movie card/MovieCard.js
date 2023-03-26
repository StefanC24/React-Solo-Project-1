import './MovieCard.css'
import { Link } from 'react-router-dom';

function MovieCard(props){
    return(
        <Link className="card-link" to={`/movie/${props.id}`}>   
                <img className='movie-poster'
                    src = {`https://image.tmdb.org/t/p/w500/${props.poster_path}`} 
                    alt = {props.title} >
                    </img>
                <p>{props.title}</p>
        </Link>
    )
}

export default MovieCard