import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './notfound';

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
              <Route path = "/blogs/:id">
                 <BlogDetails/>
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>
         
          </header>
        </div>
    </Router>
    
  );
}

export default App;
