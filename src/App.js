import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './index.css';

import PickMyTeamNavBar from './components/PickMyTeamNavBar.js';
import TeamJumbotron from './components/PickerJumbotron.js';
import NFLScoreboard from './components/NFLScoreboard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PickMyTeamNavBar />
        <header className="App-header">
          <br />
          <br />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <body>
          <Switch>
            <Route exact path="/" component={TeamJumbotron} />
            <Route path="/scoreboard" component={NFLScoreboard} />
            <Route path="/history" component={Button}/>
          </Switch>
        </body>
      </div>
    );
  }
}

export default App;
