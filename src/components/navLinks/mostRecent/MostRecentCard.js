import { Link } from "react-router-dom"
import './MostRecentCard.css'

function MostRecentCard(props){
    return(
        <Link className="card-link" to={`/movie/${props.id}`}>   
                <img className='movie-poster'
                    src = {`https://image.tmdb.org/t/p/w500/${props.poster_path}`} 
                    alt = {props.title} >
                    </img>
                <p className="movie-title">{props.title}</p>
                <p className="release-date">{props.release_date}</p>
        </Link>
    )
}

export default MostRecentCard