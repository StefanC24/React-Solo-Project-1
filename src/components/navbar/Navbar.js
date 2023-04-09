import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar(){
    return(
        <div className="navbar">
            <Link to={'/'}>
                <img className='logo' src='logos/MovieCatalogue-logos_black.png' alt=''></img>
            </Link>
            <ul className="navbar-links">
                <li><Link className='nav-item' to='/'>Home</Link></li>
                <li><Link className='nav-item' to='/top-rated-movies'>Top Rated Movies</Link></li>
                <li><Link className='nav-item' to='/most-recent'>Most Recent</Link></li>
            </ul>
        </div>
    )
}

export default Navbar