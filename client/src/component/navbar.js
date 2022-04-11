import "../App.css"
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../App'
import {useContext} from 'react'
const NavBar = () => {
  const {state,dispatch} = useContext(UserContext)
  const history = useHistory()
  const renderList = () => {
    if (state) {
      return [<li><Link to="/profile">Profile</Link></li>,
      <li><Link to="/create">New Post</Link></li>,
      <li><button className="btn waves-effect waves-light #64b5f6 blue lighten-2 logout" onClick={()=>{
        localStorage.clear()
        dispatch({type:"Clear"})
        history.push("/login")
      }}>Log Out</button></li>,
    ]
    }
    else {
      return[<li><Link to="/login">Login</Link></li>,
            <li><Link to="/signup">Sign up</Link></li>]
    }
  }
    return ( <nav>
        <div class="nav-wrapper white">
          <Link to={state?"/":"/login"} class="brand-logo left">Instagram</Link>
          <ul id="nav-mobile" class="right">
            {renderList()}
            {/* <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/create">New Post</Link></li> */}
          </ul>
        </div>
      </nav>)
}

export default NavBar;