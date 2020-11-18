import React from 'react';
import './assets/css/App.css';
import './assets/css/navbar.css';

import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Switch} from "react-router-dom";

import Routes from './routes/Routes';

function App() {
  return (
    <>
        <Router>
          <Navbar/>        
          <Switch>
            <Routes/>
          </Switch>
        </Router>
    </>
  );
}

export default App;
