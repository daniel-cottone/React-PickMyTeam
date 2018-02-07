import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap'; 

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            auth: this.props.auth
        };
    }

    componentWillReceiveProps(nextProps) {
       this.setState({ auth: nextProps.auth });  
    }

    render() {
        const isAuthenticated = this.state.auth;

        const userLinks = (
            <div>
                <Nav pullLeft>
                    <NavItem eventKey={1} >
                        <Link to="/scoreboard">Scoreboard</Link>
                    </NavItem>
                    <NavItem eventKey={2}>
                        <Link to="/history">History</Link>
                    </NavItem>
                    
                </Nav>
                <Nav pullRight>
                    <NavItem pullRight eventKey={2}>
                        {/*<Link to="#">Logout</Link>*/}
                        <Button bsSize="xsmall" onClick={this.props.handleClick}>Logout</Button>
                    </NavItem>
                </Nav>
            </div>
        );

        const guestLinks = (
            <div />
            // <Nav pullRight>
            //     <NavItem eventKey={2}>
            //         <Link to="/login">Login</Link>
            //     </NavItem>
            // </Nav>
        );

        return (
            <Navbar fixedTop inverse fluid >
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">PickMyTeam</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                { isAuthenticated ? userLinks : guestLinks }
            </Navbar>
        );

    }
}

export default NavBar;

// class NavBar extends Component {
//     render() {
//         const { isAuthenticated } = this.props.auth;

//         const userLinks = (
//             <Nav>
//                 <NavItem eventKey={1} >
//                     <Link to="/scoreboard">Scoreboard</Link>
//                 </NavItem>
//                 <NavItem eventKey={2}>
//                     <Link to="/history">History</Link>
//                 </NavItem>
//                 <NavItem pullRight eventKey={2}>
//                     <Link to="#">Logout</Link>
//                 </NavItem>
//             </Nav>
//         );

//         const guestLinks = (
//             <Nav>
//                 <NavItem pullRight eventKey={2}>
//                     <Link to="/login">Login</Link>
//                 </NavItem>
//             </Nav>
//         );

//         return (
//             <Navbar fixedTop inverse fluid >
//                 { isAuthenticated ? userLinks : guestLinks }
//             </Navbar>
//         );

//     }
// }

// NavBar.propTypes = {
//     auth: React.propTypes.object.isRequired
// }

// function mapStateToProps(state) {
//     return {
//         auth: state.auth
//     }
// }

// export default connect(mapStateToProps)(NavBar);