import './css/main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/configureStore.js'
import { browserHistory } from 'react-router'
import Root from './containers/Root'
import { syncHistoryWithStore } from 'react-router-redux'

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('app')
);

