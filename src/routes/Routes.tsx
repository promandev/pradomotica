import React, { Component } from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import Index from "../pages/index";
import Home from "../pages/sidebar/home";
import Security from "../pages/sidebar/security";
import Lights from "../pages/sidebar/lights";
import Garden from "../pages/sidebar/garden";
import Cleaning from "../pages/sidebar/cleaning";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/index"/>} />
                <Route path='/index' exact component={Index}/>
                <Route path='/home' exact component={Home}/>
                <Route path='/security' exact component={Security}/>
                <Route path='/lights' exact component={Lights}/>
                <Route path='/garden' exact component={Garden}/>
                <Route path='/cleaning' exact component={Cleaning}/>
          </Switch>
        )
    }
}

export default Routes
