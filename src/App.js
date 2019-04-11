import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Customers from './components/Customers';
import Products from './components/Products';
import Users from './components/Users';
import UserCreate from './components/UserCreate';
import UserRead from './components/UserRead';
import UserUpdate from './components/UserUpdate';
import Home from './components/Home';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark"> 
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/products/">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/customers/">Customers</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/users/">Users</Link>
                </li>
              </ul>
            </div> 
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/admin/customers/" component={Customers} />
          <Route path="/admin/products/" component={Products} />
          <Route path="/admin/users/" component={Users} />
          <Route path="/admin/users-add" component={UserCreate} />
          <Route path="/admin/users-read/:uid" component={UserRead} />
          <Route path="/admin/users-update/:uid" component={UserUpdate} />
        </div>
      </Router>
    );
  }
}

export default App;
