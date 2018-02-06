import * as React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class PickButton extends React.Component {

    render() {
        return (
            <Button bsStyle="primary" onClick={this.props.handleClick}>
                <h4>Pick My Team</h4>
            </Button>
        );
    }
}

class TeamJumbotron extends Jumbotron {

    constructor(props) {
        super(props);
        this.state = {
            teamChoice: null,
            teamLogo: null,
            isHidden: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        fetch('https://aloc1vycra.execute-api.us-east-1.amazonaws.com/prod')
        .then(response => response.text()) 
        .then(text => {
            this.setState((prevState, props) => {
                return { 
                    teamChoice: text.split(',')[0],
                    teamLogo: '/img/' + text.split(',')[1],
                    isHidden: true,
                }
            });
            console.log(this.state);
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
            {/*// <Jumbotron>*/}
                { this.state.isHidden ? <div><br /><h2>{this.state.teamChoice}</h2><br /></div> : 
                                        <div><p><h1><b>Looking for a team?</b></h1></p>
                                        <p><h2>We'll pick your team for the season.</h2></p>
                                        <br />
                                        </div> }
                { this.state.isHidden ? <img alt="team-logo" src={process.env.PUBLIC_URL + this.state.teamLogo} /> : <PickButton handleClick={this.handleClick} /> }
            {/*// </Jumbotron>*/}
            </div>
        );
    }
}

export default TeamJumbotron;