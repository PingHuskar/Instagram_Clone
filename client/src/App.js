import NavBar from "./component/navbar";
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./component/screens/Home";
import Signup from "./component/screens/Signup";
import Profile from "./component/screens/Profile";
import Login from "./component/screens/Login";
function App() {
  return (
    <BrowserRouter>
    <NavBar />
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
    </BrowserRouter>
  );
}

export default App;
