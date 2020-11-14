import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, withRouter
} from "react-router-dom";
import './App.css';
import Signup from './Components/Signup';

import Home from './Components/Home';
// import 'bootstrap/dist/css/bootstrap.css'


class App extends React.Component {
  render() {
    return (
      <div className="App">


        <Router>
          <Switch>
            <Route path="/" exact component={withRouter(Home)} />

            <Route path="/signup" component={withRouter(Signup)} />
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
