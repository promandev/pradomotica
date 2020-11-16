import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import './assets/css/navbar.css';

import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home/home';

function App() {
  return (
    <div className="App">
      <section className="sidebar">
        <Router>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}/>
          </Switch>
        </Router>

      </section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pradomótica
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
