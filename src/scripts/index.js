import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';
import Home from './Home';
import Login from './Login';
import App from './app';
import Callback from './callback';

const history = createHistory();

React.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="login" component={Login} />
      <Route path="loggedIn" component={Home} />
      <Route path="loggedout" component={Home} />
      <Route path="callback" component={Callback} />
      <IndexRoute component={Home}/>
    </Route>
  </Router>
), document.getElementById('dsc'));