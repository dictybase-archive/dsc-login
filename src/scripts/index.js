import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';
import Home from './Home';
import Login from './Login';
import App from './app';
import Callback from './callback';

const history = createHistory();

function requireAuth(nextState, replaceState) {
  if (!localStorage.getItem('auth'))
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
}

function loggedIn(nextState, replaceState) {
  if (localStorage.getItem('auth'))
    replaceState({ nextPathname: nextState.location.pathname }, '/loggedIn')
}

function callback(nextState, replaceState) {
  if (!window.location.hash)
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
}

React.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="login" component={Login} onEnter={loggedIn} />
      <Route path="loggedIn" component={Home} onEnter={requireAuth} />
      <Route path="loggedout" component={Home} />
      <Route path="callback" component={Callback} onEnter={callback}/>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
), document.getElementById('dsc'));