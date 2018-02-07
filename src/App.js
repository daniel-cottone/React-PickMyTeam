import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './index.css';
import './components/common/common.css'

// Custom components
import NavBar from './components/common/NavBar';
import LoginPage from './components/common/LoginPage';
import PickerPage from './components/common/PickerPage';
import ScoresPage from './components/common/ScoresPage';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      auth: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Button clicked!");
    this.setState({auth: !this.state.auth});
  }

  render() {
    var isAuthenticated = this.state.auth;
    console.log(this.state.auth);

    return (
      <div className="App">

        {/*Navbar*/}
        <NavBar auth={this.state.auth} handleClick={this.handleClick}/>

        {/*Header*/}
        <header className="App-header">
          <br/><br/>
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        {/*Body*/}
        <body>
          {!isAuthenticated ? <Route path="/" render={routeProps => <LoginPage handleClick={this.handleClick}/>} />:
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
