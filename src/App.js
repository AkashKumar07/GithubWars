import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Home from './containers/home/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/game" component={Home}/>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default withRouter(App);
