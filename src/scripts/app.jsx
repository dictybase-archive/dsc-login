import React from 'react';
import {Router, Route, Link, IndexRoute, Redirect} from 'react-router';
import Auth0Lock from 'auth0-lock';
import Home from './Home';
import Login from './Login';
import createHistory from 'history/lib/createBrowserHistory'

const history = createHistory();

export default class App extends React.Component {

    componentWillMount() {
      this.lock = new Auth0Lock('xCuhPtLp8BEAqB5DCxOviHYPcbpklA8k', 'haridu.auth0.com');
      this.setState({idToken: this.getIdToken()})
    }
    renderChildren = () => {
      const newChildren = React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child,
            {
                lock: this.lock,
                idToken: this.state.idToken
            });
      });
      console.log("worksss");
      return newChildren;
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
            <nav className="navbar navbar-default navbar-fixed-top" style={{backgroundColor: '#FFFFFF'}}>
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link className="navbar-brand" to="/" style={{backgroundColor: '#ffe939', color: '#000000'}}>DSC</Link>
                </div>
                <div>
                  <ul className="nav navbar-nav navbar-right">
                    {this.state.idToken ? (
                      <li><Link to="loggedout" onClick={this.logout}>Logout</Link></li>
                    ) : (
                      <li><Link to="login">Login</Link></li>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
            {this.renderChildren()}
          </div>
      );
    }
}

React.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="login" component={Login} />
      <Route path="loggedIn" component={Home} />
      <Route path="loggedout" component={Home} />
      <IndexRoute component={Home}/>
    </Route>
  </Router>
), document.getElementById('dsc'));