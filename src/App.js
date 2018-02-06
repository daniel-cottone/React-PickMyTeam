import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import './index.css';
import './components/common/common.css'

import { PickMyTeamNavBar, AuthBar } from './components/PickMyTeamNavBar.js';
import TeamJumbotron from './components/PickerJumbotron.js';
import NFLScoreboard from './components/NFLScoreboard.js';
import Auth from './components/Auth.js';

import LoginPage from './components/common/LoginPage';
import PickerPage from './components/common/PickerPage';
import ScoresPage from './components/common/ScoresPage';

class App extends Component {
  constructor () {
    super();

    this.state = {
      auth: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState = {auth: true}
  }

  render() {
    return (
      <div className="App">

        {/*Navbar*/}
        {!this.state.auth ? <AuthBar /> : <PickMyTeamNavBar />}

        {/*Header*/}
        <header className="App-header">
          <br/><br/>
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        {/*Body*/}
        <body>
          {!this.state.auth ? <Route exact path="/" render={routeProps => <LoginPage handleClick={this.handleClick}/>} />: //<Auth id='auth-button' handleClick={this.handleClick} />} />:
              <Switch>
                <Route exact path="/" component={PickerPage} />
                <Route path="/scoreboard" component={ScoresPage} />
                <Route path="/history" component={PickerPage}/>
              </Switch>
          }
        </body>
        <footer />
      </div>
    );
  }
}

export default App;
