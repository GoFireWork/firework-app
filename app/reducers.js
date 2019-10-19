import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import globalReducer from 'reducer/app';
import languageProviderReducer from 'reducer/language';
import user from 'reducer/user';
import seoSettings from './reducer/seo';

/**
 * Merges the main user with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    global: globalReducer,
    language: languageProviderReducer,
    seoSettings,
    user,
    router: connectRouter(history),
    ...injectedReducers,
  });
}
