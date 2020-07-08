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
import OurSubordenates from './view/pages/OurSubordenates'
import FireSprinkler from './view/pages/FireSprinkler'
import FireHydrant from './view/pages/FireHydrant'
import FireExtinguisher from './view/pages/FireExtinguisher'
import HoseReel from './view/pages/HoseReel'
import Co2System from './view/pages/Co2System'
import FireAlarm from './view/pages/FireAlarm'
import Fm200 from './view/pages/Fm200'
import VoiceEvacuation from './view/pages/VoiceEvacuation'
import FirePump from './view/pages/FirePump'
import FireDoor from './view/pages/FireDoor'
import FireFightingProducts from './view/pages/FireFightingProducts'
import MarineProducts from './view/pages/MarineProducts'
import Nsr from './view/pages/Nsr'
import Govt from './view/pages/Govt'
import BUREAU from "./view/pages/BUREAU"
import NIPPON from './view/pages/NIPPON'
import Germanischer from './view/pages/Germanischer'
import Partners from './view/pages/Partners'
import ContactMe from './view/pages/ContactMe'

var hist = createBrowserHistory();

//console.log('hist', hist);

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
  <Route path='/Subordinates'>
    <OurSubordenates />
  </Route>
  <Route path='/Firesprinkler'>
    <FireSprinkler />
  </Route>
  <Route path='/Firehydrant'>
    <FireHydrant />
  </Route>
  <Route path='/Fireextinguisher'>
    <FireExtinguisher />
  </Route>
  <Route path='/Hosereel'>
    <HoseReel />
  </Route>
  <Route path='/Co2system'>
    <Co2System />
  </Route>
  <Route path='/Firealarm'>
    <FireAlarm />
  </Route>
  <Route path='/Fm200'>
    <Fm200 />
  </Route>
  <Route path='/Voiceevacuation'>
    <VoiceEvacuation />
  </Route>
  <Route path='/Firepump'>
    <FirePump />
  </Route>
  <Route path='/Firedoor'>
    <FireDoor />
  </Route>
  <Route path='/Firefightingproducts'>
    <FireFightingProducts />
  </Route>
  <Route path='/Marineproducts'>
    <MarineProducts />
  </Route>
  <Route path='/NSRcertificates'>
    <Nsr />
  </Route>
  <Route path='/Govtcertificates'>
    <Govt />
  </Route>
  <Route path='/BUREAUcertificates'>
    <BUREAU />
  </Route>
  <Route path='/NIPPONcertificates'>
    <NIPPON />
  </Route>
  <Route path='/Germanischercertificates'>
    <Germanischer />
  </Route>
  <Route path='/Partners'>
    <Partners />
  </Route>
  <Route path='/Contact'>
    <ContactMe />
  </Route>


  </Switch>
     
  </Router>,
  document.getElementById("root")
);
