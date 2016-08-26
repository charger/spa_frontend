export const LOCALE_CHANGED = 'LOCALE_CHANGED';

export function localeChanged(locale, messages) {
  return {
    type: LOCALE_CHANGED,
    locale,
    messages
  }
}

export function setLocale(locale) {
  return dispatch => {
    fetch('/lang/' + locale + '.json', {
      method: 'GET'
    })
      .then((response) => response.json() )
      .then((json) => { dispatch(()=>{localStorage.setItem('locale', locale); dispatch(localeChanged(locale, json))} ) })
  }
}

export function refreshCurrentLocale() {
  return (dispatch, getState) => {
    const locale = getState()['i18n'].locale;
    dispatch(setLocale(locale));
  }
}
