import Navbar from "./Components/Navbar"
import Jumbotron from "./Components/Jumbotron"
import Search from "./Pages/Search"
import Saved from "./Pages/Saved"
import { BrowserRouter as Router, Route } from "react-router-dom";




function App() {
  return (

    <Router>
      <div className="App">
      <Navbar />
      <Jumbotron />
      <Route exact path ="/"component ={Search}/>
      <Route exact path ="/Search" component = {Search}/>
      <Route exact path ="/Saved" component = {Saved}/>
      </div>
    </Router >

    
  );
}


export default App;
