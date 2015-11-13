var React = require('react');

var Home = React.createClass({
  showLock: function() {
    this.props.lock.show();
  },

  render: function() {
    return (
    <div className="login-box auth0-box before">
      <img src="http://betatest.dictybase.org/scripts/dictyHF/dictyLogo.png" />
      <h1>Dicty Stock Center </h1>
      <p>The central repository for Dictyostelium discoideum
      strains, isolates of other cellular slime mold species, plasmids, and commonly used bacteria</p>
      <a onClick={this.showLock} className="btn btn-primary btn-lg btn-login btn-block">Sign In</a>
    </div>);
  }
});
module.exports = Home;