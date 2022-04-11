import NavBar from "./component/navbar";
import {BrowserRouter,Route,Switch,useHistory} from "react-router-dom"
import Home from "./component/screens/Home";
import Signup from "./component/screens/Signup";
import Profile from "./component/screens/Profile";
import Login from "./component/screens/Login";
import CreatePost from "./component/screens/CreatePost";
import {useEffect,createContext,useReducer,useContext} from 'react'
import {initialState,reducer} from './reducers/userReducer'
import "./App.css"

export const UserContext = createContext()

const Routing = ()=> {
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch({type:"USER",payload:user})
      history.push('/')
    }
    else {
      history.push('/login')
    }
  },[])
  return (
    <Switch>
      <Route exact path="/">
      <Home />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/profile">
      <Profile />
    </Route>
    <Route path="/create">
      <CreatePost />
    </Route>
    </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <NavBar />
    <Routing />
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
