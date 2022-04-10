const Profile = () => {
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"}}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                src="https://chadinchaipornpisuth.web.app/9.jpg" /></div>
                <div>
                    <h4>Chadin Chaipornpisuth</h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                        <h5>40 post</h5>
                        <h5>40 follower</h5>
                        <h5>40 following</h5>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className="item" src="https://chadinchaipornpisuth.web.app/8.jpg" />
                <img className="item" src="https://chadinchaipornpisuth.web.app/8.jpg" />
                <img className="item" src="https://chadinchaipornpisuth.web.app/8.jpg" />
                <img className="item" src="https://chadinchaipornpisuth.web.app/8.jpg" />
                <img className="item" src="https://chadinchaipornpisuth.web.app/8.jpg" />
                <img className="item" src="https://chadinchaipornpisuth.web.app/8.jpg" />
            </div>

        </div>
    )
}

export default Profile;