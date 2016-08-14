import './css/main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.js';
import configureStore from './store/configureStore.js'
import { Provider, connect } from 'react-redux'
import * as PostActions from './actions/PostActions.js'

const store = configureStore();

function mapStateToProps(state) {
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onTestClick: () => { dispatch(PostActions.add()); }
  }
}

// Connected Component
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
