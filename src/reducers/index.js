import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import posts from './posts'
import auth from './auth'
import i18n from './i18n'

const rootReducer = combineReducers({
  posts,
  auth,
  i18n,
  routing: routerReducer
});

export default rootReducer
