import React from 'react';
import {Link} from 'react-router';
import Navbar from './Navbar';
import NavbarHeader from './NavbarHeader';
import NavbarItems from './NavbarItems';
import Auth0Lock from 'auth0-lock';

export default class App extends React.Component {

    componentWillMount() {
      this.lock = new Auth0Lock('xCuhPtLp8BEAqB5DCxOviHYPcbpklA8k', 'haridu.auth0.com');
      this.setState({idToken: this.getIdToken()})
    }
    getIdToken = () => {
      var idToken = localStorage.getItem('userToken');
      var authHash = this.lock.parseHash(window.location.hash);
      if (!idToken && authHash) {
        if (authHash.id_token) {
          idToken = authHash.id_token
          localStorage.setItem('userToken', authHash.id_token);
        }
        if (authHash.error) {
          console.log("Error signing in", authHash);
        }
      }
      return idToken;
    }
    logout = () => {
      localStorage.removeItem('userToken');
      this.setState({idToken: false})
    }

    render() {
      return (
          <div>
            <Navbar style={{backgroundColor: '#FFFFFF'}}>
                <NavbarHeader>
                  <Link className="navbar-brand" to="/" style={{backgroundColor: '#ffe939', color: '#000000'}}>DSC</Link>
                </NavbarHeader>
                <NavbarItems>
                    {this.state.idToken ? (
                      <li><Link to="loggedout" onClick={this.logout}>Logout</Link></li>
                    ) : (
                      <li><Link to="login">Login</Link></li>
                    )}
                </NavbarItems>
            </Navbar>
            {this.props.children}
          </div>
      );
    }
}
