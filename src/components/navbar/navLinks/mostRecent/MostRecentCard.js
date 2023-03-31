import { Link } from "react-router-dom"


function MostRecentCard(props){
    return(
        <Link className="card-link" to={`/movie/${props.id}`}>   
                <img className='movie-poster'
                    src = {`https://image.tmdb.org/t/p/w500/${props.poster_path}`} 
                    alt = {props.title} >
                    </img>
                <p>{props.title}</p>
                <p>{props.release_date}</p>
        </Link>
    )
}

export default MostRecentCard