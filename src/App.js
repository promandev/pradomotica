import React from 'react';
import './assets/css/App.css';
import './assets/css/navbar.css';
import './assets/css/weatherCard.css';
import './assets/css/home.css';

import { BrowserRouter as Router, Switch} from "react-router-dom";

import Routes from './routes/Routes';
import Navbar from './components/header/components/navbar/navbar';

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
