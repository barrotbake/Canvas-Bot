import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'

let App = () => {
  return (
   <Router>
     <Route component={ HomePage } exact path="/"></Route>
     <Route component={ LoginPage } path="/login"></Route>
   </Router>
  )
}

export default App;
