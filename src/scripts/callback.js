import React from 'react';
import Auth0Lock from 'auth0-lock';

export default class Callback extends React.Component {

    componentDidMount() {
      this.lock = new Auth0Lock('xCuhPtLp8BEAqB5DCxOviHYPcbpklA8k', 'haridu.auth0.com');

      // store auth info in local storage and redirect
      this.setAuth();
    }

    setAuth = () => {
      var authHash = this.lock.parseHash(window.location.hash);
        if (authHash.id_token) {

          this.lock.getProfile(authHash.id_token, (err, profile) => {
                if (err) {
                  console.log('Cannot get user :(', err);
                  return;
                }
                localStorage.setItem('auth',JSON.stringify(
                  {
                    token: authHash.id_token,
                    profile: profile
                  })
                ); 
                // redirect
                this.props.history.pushState(null, `/loggedIn`);
          });
        }
        if (authHash.error) {
          console.log("Error signing in", authHash);
        }
    }

    render() {
      return (
        <div className="container">
          <h1>Logging in...</h1>
        </div>
      );
    }
}