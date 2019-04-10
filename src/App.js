import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Customers from './components/Customers';
import Products from './components/Products';
import Users from './components/Users';
import Home from './components/Home';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav class="navbar navbar-expand-sm bg-dark navbar-dark"> 
            <a class="navbar-brand" href="/">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/admin/products/">Products</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/admin/customers/">Customers</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/admin/users/">Users</Link>
                </li>
              </ul>
            </div> 
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/admin/customers/" component={Customers} />
          <Route path="/admin/products/" component={Products} />
          <Route path="/admin/users/" component={Users} />
        </div>
      </Router>
    );
  }
}

export default App;
