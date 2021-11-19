import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { SignupPage } from './pages/SignupPage'
import { PortalPage } from './pages/PortalPage'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Footer from './components/footer'
import TestPage from './pages/TestPage'

let App = () => {
  return (
   <Router>
     <Navbar/>
     <Route component={ HomePage } exact path="/"></Route>
     <Route component={ LoginPage } path="/login"></Route>
     <Route component={ SignupPage} path="/signup"></Route>
     <Route component={ PortalPage} path="/portal"></Route>
     <Route component={ TestPage} path="/test"></Route>
     <Footer/>
   </Router>
  )
}

export default App;
