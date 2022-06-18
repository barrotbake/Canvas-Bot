import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { SignupPage } from './pages/SignupPage'
import { PortalPage } from './pages/PortalPage'
import { AboutPage } from './pages/AboutPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



let App = () => {
  return (
   <Router>
     <Navbar/>
     <Route component={ HomePage } exact path="/"></Route>
     <Route component={ LoginPage } path="/login"></Route>
     <Route component={ SignupPage} path="/signup"></Route>
     <Route component={ PortalPage} path="/portal"></Route>
     <Route component={ AboutPage } path="/about"></Route>     
     <Footer/>
   </Router>
  )
}

export default App;
