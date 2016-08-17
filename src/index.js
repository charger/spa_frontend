import './css/main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/configureStore.js'
import { browserHistory } from 'react-router'
import Root from './containers/Root'
import syncHistoryWithStore from 'react-router-redux'


const store = configureStore();
// const history = syncHistoryWithStore(browserHistory, store);
console.log(process.env.NODE_ENV);

ReactDOM.render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('app')
);

