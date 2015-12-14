import React from 'react';

export default class Navbar extends React.Component {
  displayName = 'navigation bar parent component'

    static propTypes = {
      style: React.PropTypes.object
    }

    render() {
      return (
        <nav className="navbar navbar-default navbar-fixed-top" style={this.props.style}>
          <div className="container-fluid">
            {this.props.children}
          </div>
        </nav>
      );
    }
}
