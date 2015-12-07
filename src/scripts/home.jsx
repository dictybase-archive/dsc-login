import React from 'react';
import {Router, Route, Link, IndexRoute} from 'react-router';
import Auth0Lock from 'auth0-lock';

export default class Home extends React.Component {

    render() {
      return (
          <div className="container ng-scope">
            <div className="panel panel-default" style={{borderRadius: '0px'}}>
              <div className="panel-heading" style={{fontSize: '85%',fontWeight: 'bold', textTransform: 'uppercase'}}>
                Home Page
              </div>
              <div className="panel-body">
                <h2>Welcome to the Dicty Stock Center</h2>
                The Dicty Stock Center is a central repository for Dictyostelium discoideum strains, isolates of other cellular slime mold species, plasmids, and commonly used bacteria. These rapidly growing collections can be searched through catalogs which are continuously updated. The strain collection includes:
                <ul>
                  <li>None</li>
                </ul>
              </div>
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
            </div>
          </div>
      );
    }
}