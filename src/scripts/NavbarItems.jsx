import React from 'react';

export default class NavbarItems extends React.Component {
  displayName = 'navbar items'

    render() {
      return (
        <div>
          <ul className="nav navbar-nav navbar-right">
            {this.props.children}
          </ul>
        </div>
      );
    }
}
