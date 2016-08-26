import {LOCALE_CHANGED} from '../actions/I18nActions'

export default function l18n(state = {
  locale: localStorage.getItem('locale') || navigator.language || 'en',
  messages: {}
}, action) {
  switch (action.type) {
    case LOCALE_CHANGED:
      return Object.assign({}, state, {locale: action.locale, messages: action.messages});
    default:
      return state
  }
}
