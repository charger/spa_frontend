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

    return (
      <div className="m-t-3">
        <div className="form-group row">
          <div className="col-sm-10">
            <h2>Sign In</h2>
          </div>
        </div>


        <form onSubmit={this._submit.bind(this)} ref="postForm">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Login</label>
            <div className="col-sm-10">
              <input type="text" ref="username" className="form-control"/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Password</label>
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
              <input type="submit" value="Sign In" className="btn btn-primary" />
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
