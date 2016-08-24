import React from 'react';
import {Link} from 'react-router';

class MainLayout extends React.Component {
  _handleSignOut(e) {
    e.preventDefault();
    this.props.onSignOutClick();
  }

  render() {
    const userName = this.props.userName;
    const isAuthenticated = this.props.isAuthenticated;

    return(
      <div>
        <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
          <Link className="navbar-brand" to="/">SPA</Link>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts">Posts</Link>
            </li>
          </ul>

          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              { isAuthenticated ?
                <a className="nav-link" href="#" onClick={this._handleSignOut.bind(this)}>Sign Out ({userName})</a>
                : false
              }

            </li>
          </ul>
        </nav>

      <div className="container">
        {this.props.children}
      </div>
        </div>
    );
  }
}

MainLayout.propTypes = {
  onSignOutClick: React.PropTypes.func.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
  userName: React.PropTypes.string
};

export default MainLayout;
