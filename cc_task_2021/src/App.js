import './App.css';
import React from "react";
import Home from './screens/home/home';
import Men from './screens/men/men';
import Err from './screens/404/404';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link,
  Redirect
} from "react-router-dom";


const App = () => {
  
    return (
      <div className="App">
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
        <Router>
          <Switch>
                <Route exact path="/men">
                  <Men name='Men' />
                </Route>
                <Route exact path='/' >
                  <Home />
                </Route>
                <Route exact path='/404' >
                  <Err />
                </Route>
                <Route >
                  <Redirect to="/404" />
                </Route>
                
          </Switch>
        </Router>
      </div>
    );
}

export default App;
