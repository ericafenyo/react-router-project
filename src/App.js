import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route,NavLink } from "react-router-dom"
import History from './History';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="is-active">Home</NavLink>
              </li>
              <li>
                <NavLink exact to="/notre-histoire" activeClassName="is-active">History</NavLink>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/notre-histoire" component={History} />
        </div>
      </Router>
    );
  }
}

export default App;
