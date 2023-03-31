import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar(){
    return(
        <div className="navbar">
            <ul className="navbar-links">
                <li className='nav-item'><Link to='/'>Home</Link></li>
                <li className='nav-item'><Link to='/top-rated-movies'>Top Rated Movies</Link></li>
                <li className='nav-item'><Link to='/most-recent'>Most Recent</Link></li>
            </ul>
        </div>
    )
}

export default Navbar