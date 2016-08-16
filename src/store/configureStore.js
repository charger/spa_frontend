import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'

export default function configureStore(preloadedState) {
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
