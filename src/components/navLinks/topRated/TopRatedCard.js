import { Link } from "react-router-dom"
import './TopRatedCard.css'

function TopRatedCard(props){
    return(
        <Link className="card-link" to={`/movie/${props.id}`}>   
            <img className='movie-poster'
                src = {`https://image.tmdb.org/t/p/w500/${props.poster_path}`} 
                alt = {props.title} >
                </img>
            <p className="movie-rating">{props.vote_average}</p>
            <p className ='movie-title'>{props.title}</p>
        </Link>
    )
}

export default TopRatedCard