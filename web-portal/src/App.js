import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Footer from './components/Footer'

let App = () => {
  return (
   <Router>
     <Navbar/>
     {/* <Route component={ HomePage } exact path="/"></Route>
     <Route component={ LoginPage } path="/login"></Route> */}
     <Landing/>
     <Footer/>
   </Router>
  )
}

export default App;
