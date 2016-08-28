import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import routes from '../routes'
import { Router } from 'react-router'
import IntlProvider from './IntlProvider'
import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
addLocaleData([...en, ...ru]);

export default class Root extends Component {
  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <IntlProvider>
          <Router history={history} routes={routes} />
        </IntlProvider>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
