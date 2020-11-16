import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/LogIn";
import ClientSignUp from "./components/ClientSignUp";
import OrganizerSignUp from "./components/OrganizerSignUp";
import AddEvent from "./components/AddEvent";
import Event from "./components/Event";
import logo from 'C:/Users/h/Desktop/RIBSH/sharkona_v2/front/src/photo/logoo.png'

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}><img src={logo} width="150" height="150"/></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"} >Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Clientsign-up"}>Client-Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Orgsign-up"}>Org-Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Add-Event"}>Add Event</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Event"}>Event</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/Clientsign-up" component={ClientSignUp} />
            <Route path="/Orgsign-up" component={OrganizerSignUp} />
            <Route path="/Add-Event" component={AddEvent} />
            <Route path="/Event" component={Event} />


          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;