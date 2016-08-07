import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.js';

ReactDOM.render(
  <App apiEndpoint="http://localhost:3000/api"/>,
  document.getElementById('app')
);
