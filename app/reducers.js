/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import issuesReducer from 'containers/Issues/reducer';
import codeMirrorReducer from 'containers/CodeMirror/reducer';
import testsReducer from 'containers/Tests/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    global: globalReducer,
    language: languageProviderReducer,
    issues: issuesReducer,
    codeMirror: codeMirrorReducer,
    tests: testsReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });
}
