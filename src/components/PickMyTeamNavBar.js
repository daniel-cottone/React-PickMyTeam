import * as React from 'react';
import { Navbar, MenuItem, NavDropdown, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PickMyTeamNavBar extends Navbar {
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
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default PickMyTeamNavBar;