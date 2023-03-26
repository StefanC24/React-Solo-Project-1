import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar(){
    return(
        <div className="navbar">
            <ul className="navbar-links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/rating'>Rating</Link></li>
                <li><Link to='/most-recent'>Most Recent</Link></li>
            </ul>
        </div>
    )
}

export default Navbar