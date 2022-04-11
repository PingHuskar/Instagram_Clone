import {useState,useEffect} from 'react'
const Home = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("/allpost",{
            headers: {
                "Authorization":"Bearer " + localStorage.getItem("jwt")
            }
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            setData(result.posts.reverse())
        })
        .catch(err=>console.log(err))
    },[])
    return (
        <div className="home">
            {
                data.map(item => {
                    return (
                        <div className="card home-card" key={item._id}>
                            <h3>{item.postedBy.name}</h3>
                            <div className="card-image">
                                <img src={item.photo} alt={item.title} />
                            </div>
                            <div className="card-content">
                            <i className="material-icons">favorite</i>
                                <h6>{item.title}</h6>
                                <p>{item.body}</p>
                                <input type="text" placeholder="add a comment"></input>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Home;