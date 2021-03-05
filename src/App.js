import React from 'react';
import './assets/css/App.scss';
import './assets/css/navbar.scss';
import './assets/css/weatherCard.scss';
import './assets/css/dashboard.scss';
import './assets/css/pages/home.scss';
import './assets/css/pages/security.scss';
import './assets/css/pages/lights.scss';
import './assets/css/pages/garden.scss';
import './assets/css/pages/cleaning.scss';
import './assets/css/pages/profile.scss';


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
