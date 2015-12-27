import React from 'react';
import {Link} from 'react-router';
import Navbar from './Navbar';
import NavbarHeader from './NavbarHeader';
import NavbarItems from './NavbarItems';
import Status from './Status';
import Auth0Lock from 'auth0-lock';

export default class App extends React.Component {

    render() {
      return (
          <div>
            <Navbar style={{backgroundColor: '#FFFFFF'}}>
                <NavbarHeader>
                  <Link className="navbar-brand" to="/" style={{backgroundColor: '#ffe939', color: '#000000'}}>DSC</Link>
                </NavbarHeader>
                <NavbarItems>
                  <Status />
                </NavbarItems>
            </Navbar>
            {this.props.children}
          </div>
      );
    }
}
