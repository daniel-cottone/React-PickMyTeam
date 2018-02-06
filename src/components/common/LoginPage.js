// ./src/components/common/LoginPage.js
import React from 'react';
import GoogleButton from 'react-google-button'
import './common.css';

export class Login extends React.Component {
    render () {
        return (
            <div id="Login">
                <p>
                    <GoogleButton
                        type="dark" // can also be written as disabled={true} for clarity
                        //onClick={() => { console.log("Login button was clicked!") }}
                        onClick={this.props.handleClick}
                    />
                </p>
            </div>
        );
    }
};

export default Login;


// const Login = () => {
//   return (
//     <div id="Login">
//         <p>
//             <GoogleButton
//                 type="dark" // can also be written as disabled={true} for clarity
//                 //onClick={() => { console.log("Login button was clicked!") }}
//                 onClick={this.props.handleClick}
//             />
//         </p>
//     </div>
//   );
// };