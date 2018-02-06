import * as React from 'react';
import './common.css';

class NFLScoreboard extends React.Component {

    render() {
        return (
            <div> 
                {/*//id="Scores">*/}
                <iframe id="ScoreFrame" src="http://www.nfl.com/scores#regSeason" title="NFL iFrame"/>
            </div>
        )
    }
}

export default NFLScoreboard;



// class Iframe extends React.Component {     
//   render() {
//     return(         
//         <iframe src={this.props.src} frameborder="0" width="100%" height="100%"
//                 position="absolute" border="0" title="NFL iframe" //top="0" left="0" right="0" bottom="0" 
//         />         
//     )
//   }
// }