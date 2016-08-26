import React from 'react';
import SignIn from '../components/SignIn';
import {loginUser}  from '../actions/AuthActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {injectIntl} from 'react-intl'

const mapStateToProps = (state) => {
  return state.auth
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({onLoginClick: loginUser}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(SignIn));
