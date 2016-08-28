import React from 'react';

class SignIn extends React.Component {
  _submit(e){
    e.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    this.props.onLoginClick(username, password)
  }

  render(){
    const errorMessage = this.props.errorMessage;
    const t = {
      pageTitle: this.props.intl.formatMessage({ id: 'sign_in_form.page_title', defaultMessage: 'Sign In' }),
      login: this.props.intl.formatMessage({ id: 'sign_in_form.login', defaultMessage: 'Login' }),
      password: this.props.intl.formatMessage({ id: 'sign_in_form.password', defaultMessage: 'Password' }),
      signInButton: this.props.intl.formatMessage({ id: 'sign_in_form.sign_in_button', defaultMessage: 'Sign In' }),
    };

    return (
      <div className="m-t-3">
        <div className="form-group row">
          <div className="col-sm-10">
            <h2>{t.pageTitle}</h2>
          </div>
        </div>


        <form onSubmit={this._submit.bind(this)} ref="postForm">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">{t.login}</label>
            <div className="col-sm-10">
              <input type="text" ref="username" className="form-control"/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">{t.password}</label>
            <div className="col-sm-10">
              <input type="password" ref="password" className="form-control"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="offset-sm-2 col-sm-10">
              {errorMessage &&
              <p style={{color: 'red'}}>{errorMessage}</p>
              }
            </div>
          </div>

          <div className="form-group row">
            <div className="offset-sm-2 col-sm-10">
              <input type="submit" value={t.signInButton} className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

SignIn.propTypes = {
  onLoginClick: React.PropTypes.func.isRequired,
  errorMessage: React.PropTypes.string
};

export default SignIn
