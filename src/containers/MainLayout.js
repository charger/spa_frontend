import React from 'react';
import MainLayout from '../components/MainLayout';
import {logoutUser}  from '../actions/AuthActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    userName: state.auth.session && state.auth.session.full_name
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({onSignOutClick: logoutUser}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);
