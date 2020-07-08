import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./assets/scss/material-kit-react.scss?v1.9.0";

//assets/scss/material-kit-react.scss?v=1.9.0

// pages for this product
//import Components from "views/Components/Components.js";
import App from "./view/App";
//import ProfilePage from "views/ProfilePage/ProfilePage.js";
//import LoginPage from "views/LoginPage/LoginPage.js";
import About from './view/pages/About'
import MissionVision from './view/pages/MissionVision'
import Chairman from './view/pages/Chairman'
import OurProjects from './view/pages/OurProjects'
import Facilities from './view/pages/Facilities'

var hist = createBrowserHistory();

console.log('hist', hist);

ReactDOM.render(
  <Router history={hist}>
 
    
  <Switch>

  <Route exact path='/'>
    <App />
  </Route>
  <Route path='/About'>
    <About />
  </Route>
  <Route path='/MissionVision'>
    <MissionVision />
  </Route>
  <Route path='/Chairman'>
    <Chairman />
  </Route>
  <Route path='/OurProjects'>
    <OurProjects />
  </Route>
  <Route path='/Facilities'>
    <Facilities />
  </Route>
  
  </Switch>
     
  </Router>,
  document.getElementById("root")
);
