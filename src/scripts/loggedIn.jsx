var React = require('react');

var LoggedIn = React.createClass({
  callApi: function() {
    $.ajax({
      url: 'http://localhost:3001/secured/ping',
      method: 'GET'
    }).then(function(data, textStatus, jqXHR) {
      alert("The request to the secured enpoint was successfull");
    }, function() {
      alert("You need to download the server seed and start it to call this API");
    });
  },

  logout: function() {
    localStorage.removeItem('userToken');
  },

  getInitialState: function() {
    return {
      profile: null
    }
  },

  componentDidMount: function() {
    this.props.lock.getProfile(this.props.idToken, function (err, profile) {
      if (err) {
        console.log("Error loading the Profile", err);
        alert("Error loading the Profile");
      }
      this.setState({profile: profile});
    }.bind(this));
  },

  render: function() {
    if (this.state.profile) {
      return (
        <div className="logged-in-box auth0-box logged-in">
          <h1 id="logo"><img src="http://betatest.dictybase.org/scripts/dictyHF/dictyLogo.png" /></h1>
          <img src={this.state.profile.picture} />
          <h2>Welcome {this.state.profile.name}</h2>
          <button onClick={this.callApi} className="btn btn-lg btn-primary">Call API</button>
          <br />
          <button onClick={this.logout} className="btn btn-lg btn-primary">Log Out</button>
        </div>);
    } else {
      return (
        <div className="logged-in-box auth0-box logged-in">
          <h1 id="logo"><img src="https://cdn.auth0.com/blog/auth0_logo_final_blue_RGB.png" /></h1>
        </div>);
    }
  }
});
module.exports = LoggedIn;