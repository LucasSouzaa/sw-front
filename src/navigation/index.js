import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from '../home/container/HomeContainer';
import ForceSelectorContainer from '../forceSelector/container/ForceSelectorContainer';

class Navigation extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={HomeContainer} />
                    <Route path="/the-force" exact component={ForceSelectorContainer} />
                </Switch>
            </Router>
        );
    }
}

export default Navigation;
