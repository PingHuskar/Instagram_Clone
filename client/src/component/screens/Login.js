import {Link,useHistory} from 'react-router-dom'
import {useState} from 'react'
import M from 'materialize-css'

const Login = () => {
    const history = useHistory()
    const [password,setPassword] = useState("") 
    const [email,setEmail] = useState("")
    const PostData = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({html: "Invalid Email pattern",classes:"#d32f2f red darken-2"})
            return
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.error) {
                M.toast({html: data.error,classes:"#d32f2f red darken-2"})
            }
            else {
                M.toast({html: "Login Success",classes:"#4caf50 green"})
                history.push('/')
            }
            // console.log(data)
        }).catch(err=>{console.log(err)})
    }
    return (
        <div className="mycard">
        <div className="card auth-card input-field">
            <h2>Instagram</h2>
            <input type="text" placeholder="Email"
            value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <input type="password" placeholder="Password"
            value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action"
            onClick={()=>PostData()}>
                Login
            </button>
            <h5><Link to="/signup">Don't have an account?</Link></h5>
        </div>
      </div>
      )
}

export default Login;