import * as React from 'react';
import '../index.css';


class Iframe extends React.Component {     
  render() {
    return(         
        <iframe src={this.props.src} frameborder="0" width="100%" height="100%"
                position="absolute" border="0"//top="0" left="0" right="0" bottom="0" 
        />         
    )
  }
}

class NFLScoreboard extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div id='iframe'>
                <Iframe src="http://www.nfl.com/scores#regSeason" />
            </div>
        )
    }
}

export default NFLScoreboard;