import React, { Component } from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import Dashboard from "../pages/index/dashboard";
import Home from "../pages/sidebar/home";
import Security from "../pages/sidebar/security";
import Lights from "../pages/sidebar/lights";
import Garden from "../pages/sidebar/garden";
import Cleaning from "../pages/sidebar/cleaning";
import Profile from "../pages/sidebar/profile";


class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/dashboard"/>} />
                <Route path='/dashboard' exact component={Dashboard}/>
                <Route path='/home' exact component={Home}/>
                <Route path='/security' exact component={Security}/>
                <Route path='/lights' exact component={Lights}/>
                <Route path='/garden' exact component={Garden}/>
                <Route path='/cleaning' exact component={Cleaning}/>
                <Route path='/profile' exact component={Profile}/>
          </Switch>
        )
    }
}

export default Routes
