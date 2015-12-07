import React from 'react';
import Auth0Lock from 'auth0-lock';

export default class Login extends React.Component {

    componentDidMount() {
      this.props.lock.show({
          container: 'loginBox'
        });
    }
    render() {
      return (
          <div className="container">
            <div className="row">
              <div className= "col-xs-4 col-xs-offset-4" id="loginBox"></div>
            </div>
          </div>
      );
    }
}