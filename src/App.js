import { BrowserRouter ,Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App(){
return(
  <div className="App">
<BrowserRouter>
<Navbar/>
<Route path="/aboutus" component={Aboutus}/>
<Route path="/home" component={Home}/>
<Route path="/profile" component={Profile}/>

</BrowserRouter>
  </div>
);

}

export default App;
