import {Link,useHistory} from 'react-router-dom'
import {useState} from 'react'
import M from 'materialize-css'

const Signup = () => {
    const histort = useHistory()
    const [name,setName] = useState("") 
    const [password,setPassword] = useState("") 
    const [email,setEmail] = useState("")
    const PostData = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({html: "Invalid Email pattern",classes:"#d32f2f red darken-2"})
            return
        }
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email
            })
        }).then(res => res.json())
        .then(data => {
            if (data.error) {
                M.toast({html: data.error,classes:"#d32f2f red darken-2"})
            }
            else {
                M.toast({html: data.message,classes:"#4caf50 green"})
                histort.push('/login')
            }
            // console.log(data)
        })
    }
    return (
        <div className="mycard">
        <div className="card auth-card input-field">
            <h2>Instagram</h2>
            <input type="text" placeholder="Username"
            value={name}
            onChange={(e)=>setName(e.target.value)}/>

            <input type="text" placeholder="Email"
            value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <input type="password" placeholder="Password"
            value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action"
            onClick={() => PostData()}>
            Sign up
            </button>
            <h5><Link to="/login">Already have an account?</Link></h5>
        </div>
      </div>
      )
}

export default Signup;