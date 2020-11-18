import React from 'react';
import './assets/css/App.css';
import './assets/css/navbar.css';

import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/sidebar/home";
import Security from "./pages/sidebar/security";
import Garden from "./pages/sidebar/garden";
import Lights from "./pages/sidebar/lights";
import Cleaning from "./pages/sidebar/cleaning";

function App() {
  return (
    <>
        <Router>
          <Navbar/>        
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/security' exact component={Security}/>
            <Route path='/lights' exact component={Lights}/>
            <Route path='/garden' exact component={Garden}/>
            <Route path='/cleaning' exact component={Cleaning}/>
          </Switch>
        </Router>

    </>
  );
}

export default App;
