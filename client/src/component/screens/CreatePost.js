import {useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
const CreatePost = () => {
    const history = useHistory()
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")
    useEffect(()=>{
        if (url) {
        fetch("/createpost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title,
                body,
                pic:url
            })
        }).then(res => res.json())
        .then(data => {
            if (data.error) {
                M.toast({html: data.error,classes:"#d32f2f red darken-2"})
            }
            else {
                M.toast({html: "Post Success",classes:"#4caf50 green"})
                history.push('/')
            }
            // console.log(data)
        }).catch(err=>{console.log(err)})
    }
    },[url])
    const postDetails = () => {
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","ig-clone")
        data.append("cloud_name","dvw66rmkw")
        fetch("https://api.cloudinary.com/v1_1/dvw66rmkw/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="card input-filled" style={{
            margin: "10px auto",maxWidth: "500px",padding: "20px",textAlign: "center"
        }}>
            <input type="text" placeholder="title" 
            value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" placeholder="body"
            value={body} onChange={(e)=>setBody(e.target.value)} />
            <div class="file-field input-field">
            <div className="btn">
                <span>Upload Image</span>
                <input type="file" 
                onChange={(e)=>setImage(e.target.files[0])}/>
            </div>
            <div class="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action"
            onClick={()=>postDetails()}>
            Post
            </button>
      </div>
      )
}

export default CreatePost;