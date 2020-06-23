import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Game from './containers/game/game'
import Home from './containers/home/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/game" exact component={Game}/>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default withRouter(App);
