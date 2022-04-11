const Home = () => {
    return (
        <div className="home">
            <div className="card home-card">
                <h3>pinghuskar</h3>
                <div className="card-image">
                    <img src="https://chadinchaipornpisuth.web.app/tallinn-estonia-night-starry-sky-above-old-castl-2021-08-30-06-30-31-utc.jpg" />
                </div>
                <div className="card-content">
                <i className="material-icons">favorite</i>
                    <h6>title</h6>
                    <p>this is desctiption</p>
                    <input type="text" placeholder="add a comment"></input>
                </div>
            </div>
        </div>
    )
}

export default Home;