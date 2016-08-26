import React from 'react';
import {refreshCurrentLocale}  from '../actions/I18nActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {IntlProvider} from 'react-intl';

const mapStateToProps = (state) => {
  return {
    locale: state.i18n.locale,
    messages: state.i18n.messages
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({refreshLocale: refreshCurrentLocale}, dispatch)
}

export default connect(
  mapStateToProps
)(IntlProvider);
