import './css/main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.js';
import configureStore from './store/configureStore.js'
const store = configureStore();

ReactDOM.render(
  <App store={store} />,
  document.getElementById('app')
);
