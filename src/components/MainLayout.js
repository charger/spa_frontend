import React from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';

class MainLayout extends React.Component {
  componentDidMount(){
    this.props.refreshCurrentLocale();
  }

  _handleSignOut(e) {
    e.preventDefault();
    this.props.onSignOutClick();
  }

  _handleLocaleClick(locale, e) {
    e.preventDefault();
    console.log('locale', locale);
    this.props.onChangeLocale(locale);
  }

  render() {
    const userName = this.props.userName;
    const isAuthenticated = this.props.isAuthenticated;
    const t = {
      home: this.props.intl.formatMessage({ id: 'main_layout.home', defaultMessage: 'Home' }),
      posts: this.props.intl.formatMessage({ id: 'main_layout.posts', defaultMessage: 'Posts' }),
      sign_out: this.props.intl.formatMessage({ id: 'main_layout.sign_out', defaultMessage: 'Sign Out ({userName})' }, {userName: userName}),
    };

    return(
      <div>
        <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
          <Link className="navbar-brand" to="/">SPA</Link>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">{t.home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts">{t.posts}</Link>
            </li>
          </ul>

          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <a className={classNames({'nav-link': true, 'active': this.props.locale == 'en'})} onClick={this._handleLocaleClick.bind(this, 'en')} href="#">En</a>
            </li>
            <li className="nav-item">
              <a className={classNames({'nav-link': true, 'active': this.props.locale == 'ru'})} onClick={this._handleLocaleClick.bind(this, 'ru')} href="#">Ru</a>
            </li>
            <li className="nav-item">
              { isAuthenticated ?
                <a className="nav-link" href="#" onClick={this._handleSignOut.bind(this)}>{t.sign_out}</a>
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
