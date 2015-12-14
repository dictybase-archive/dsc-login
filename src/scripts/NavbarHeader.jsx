import React from 'react';

export default class NavbarHeader extends React.Component {
  displayName = 'navigation bar header component'

    render() {
      return (
        <div className="navbar-header">
          {this.props.children}
        </div>
      );
    }
}
