import React, { Component } from 'react';
import './common.css';

class ScoresPage extends Component {

    render() {
        return (
            <div> 
                {/*//id="Scores">*/}
                <iframe id="ScoreFrame" src="http://www.nfl.com/scores#regSeason" title="NFL iFrame"/>
            </div>
        )
    }
}

export default ScoresPage;