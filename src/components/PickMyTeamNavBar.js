import * as React from 'react';
import { Navbar, MenuItem, NavDropdown, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

export class AuthBar extends Navbar {
  render() {
    return (
       <Navbar fixedTop inverse fluid >
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">PickMyTeam</Link>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export class PickMyTeamNavBar extends Navbar {
  render() {
    return (
      <Navbar fixedTop inverse fluid >
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">PickMyTeam</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} >
            <Link to="/scoreboard">Scoreboard</Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to="/history">History</Link>
          </NavItem>
        </Nav>
        <Nav pullRight >
          <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>
              <GoogleLogin
                clientId="332557267946-7bqtb8ahaumojvno3dghd3p76hq0r3qt.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />,
            </MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>

          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

// export default { AuthBar, PickMyTeamNavBar };