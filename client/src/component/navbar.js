import "../App.css"
import {Link} from 'react-router-dom'
const NavBar = () => {
    return ( <nav>
        <div class="nav-wrapper white">
          <Link to="/" class="brand-logo left">Instagram</Link>
          <ul id="nav-mobile" class="right">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>
      </nav>)
}

export default NavBar;