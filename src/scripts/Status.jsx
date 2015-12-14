import React from 'react';
import {Link} from 'react-router';

export default class Status extends React.Component {
  displayName = 'navbar component to indicate user login status'

    componentWillMount() {
      this.setState({loggedIn: this.loggedIn()})
    }

    loggedIn = () => {
      if (localStorage.getItem('userToken')) {
        return true;
      }
      return false;
    }

    logout = () => {
      localStorage.removeItem('userToken');
      this.setState({loggedIn: false})
    }

    render() {
      if (this.state.loggedIn) {
        return (<li><Link to="loggedout" onClick={this.logout}>Logout</Link></li>);
      } else {
        return (<li><Link to="login">Login</Link></li>);
      }
    }
}
