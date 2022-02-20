import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Create from './Create';

function App() {


  return (
    <Router>
       <div className="App">
          <Navbar/>
          <header className="content">
            <Switch>
              <Route exact path = "/">
                 <Home/>
              </Route>
              <Route path = "/create">
                 <Create/>
              </Route>
            </Switch>
         
          </header>
        </div>
    </Router>
    
  );
}

export default App;
