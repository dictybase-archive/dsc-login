import React from 'react';
import Auth0Lock from 'auth0-lock';

export default class Login extends React.Component {

    componentWillMount() {
      this.lock = new Auth0Lock('xCuhPtLp8BEAqB5DCxOviHYPcbpklA8k', 'haridu.auth0.com');
    }
    componentDidMount() {
      this.lock.show({
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