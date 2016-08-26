import React from 'react';
import MainLayout from '../components/MainLayout';
import {logoutUser}  from '../actions/AuthActions'
import {setLocale, refreshCurrentLocale}  from '../actions/I18nActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { injectIntl } from 'react-intl'

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    userName: state.auth.session && state.auth.session.full_name,
    locale: state.i18n.locale
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({onSignOutClick: logoutUser, onChangeLocale: setLocale, refreshCurrentLocale}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(MainLayout));
