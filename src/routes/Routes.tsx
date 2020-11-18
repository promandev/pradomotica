import React, { Component } from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import Cleaning from "../pages/sidebar/cleaning";
import Garden from "../pages/sidebar/garden";
import Home from "../pages/sidebar/home";
import Lights from "../pages/sidebar/lights";
import Security from "../pages/sidebar/security";

class Routes extends Component {
    render() {
        return (
            <Switch>
            <Route exact path="/" render={() => <Redirect to="/dashboard"/>} />
            <Route path='/' exact component={Home}/>
            <Route path='/security' exact component={Security}/>
            <Route path='/lights' exact component={Lights}/>
            <Route path='/garden' exact component={Garden}/>
            <Route path='/cleaning' exact component={Cleaning}/>
          </Switch>
        )
    }
}

export default Routes
