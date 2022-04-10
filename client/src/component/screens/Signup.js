import {Link} from 'react-router-dom'
const Signup = () => {
    return (
        <div className="mycard">
        <div className="card auth-card input-field">
            <h2>Instagram</h2>
            <input type="text" placeholder="Username"></input>
            <input type="text" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action">
            Sign up
            </button>
            <h5><Link to="/login">Already have an account?</Link></h5>
        </div>
      </div>
      )
}

export default Signup;