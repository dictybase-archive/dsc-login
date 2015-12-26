import React from 'react';
import {Router, Route, Link, IndexRoute} from 'react-router';
import Auth0Lock from 'auth0-lock';

export default class Home extends React.Component {

    render() {
      return (
          <div className="container">
            <div className="panel panel-default" style={{borderRadius: '0px'}}>
              <PanelHeader />
              <PanelBody />
              <PanelFooter />
            </div>
          </div>
      );
    }
}

export class PanelHeader extends React.Component {

    state = {
      profile: null
    }

    componentDidMount() {
      if (localStorage.getItem('auth')) {
        const profile = JSON.parse(localStorage.getItem('auth')).profile;
        this.setState({
          profile: profile
        });
        
      } 
    }

    render() {
      if (this.state.profile){
        return (
          <div className="panel-heading" style={{fontSize: '85%',fontWeight: 'bold'}}>
            Hello, {this.state.profile.name}
          </div>
        );
      } else {
        return (
          <div className="panel-heading" style={{fontSize: '85%',fontWeight: 'bold'}}>
            Home
          </div>
        );
      }
    }
}

export class PanelBody extends React.Component {

    render() {
      return (
        <div className="panel-body">
          <h2>Welcome to the Dicty Stock Center</h2>
          The Dicty Stock Center is a central repository for Dictyostelium discoideum strains, isolates of other cellular slime mold species, plasmids, and commonly used bacteria. These rapidly growing collections can be searched through catalogs which are continuously updated. The strain collection includes:
          <ul>
            <li>None</li>
          </ul>
        </div>
      );
    }
}

export class PanelFooter extends React.Component {

    render() {
      return (
        <div className="panel-footer text-center">
          <ul className="list-inline">
            <li>
              <i className="fa fa-star"></i> 6500 stars
            </li>
            <li>
              <i className="fa fa-code-fork"></i> 12 forks
            </li>
            <li>
              <i className="fa fa-git"></i> 20 issues
            </li>
          </ul>
        </div>
      );
    }
}
