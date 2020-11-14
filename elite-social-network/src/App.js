import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Signup from './Components/Signup';

import Home from './Components/Home';
import Login from './Components/Login';
// import 'bootstrap/dist/css/bootstrap.css'


class App extends React.Component {
  render() {
    return (
      <div className="App bg-black">


        <Router>
          <Switch>
            <Route path="/" exact component={Home} ></Route>

            <Route path="/signup" component={Signup} ></Route>
            <Route path="/login" component={Login} ></Route>
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
