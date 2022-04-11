import {Link} from 'react-router-dom'
const CreatePost = () => {
    return (
        <div className="card input-filled" style={{
            margin: "10px auto",maxWidth: "500px",padding: "20px",textAlign: "center"
        }}>
            <input type="text" placeholder="title"></input>
            <input type="text" placeholder="body"></input>
            <div class="file-field input-field">
            <div className="btn">
                <span>Upload Image</span>
                <input type="file" />
            </div>
            <div class="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action">
            Post
            </button>
      </div>
      )
}

export default CreatePost;