import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'

export default function configureStore(browserHistory, preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, routerMiddleware(browserHistory))
  )
}
