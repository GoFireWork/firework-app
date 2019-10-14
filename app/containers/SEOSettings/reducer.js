import produce from 'immer';
import { RECEIVE_SEO_SETTINGS, RECEIVE_SEO_SETTINGS_ERROR } from './constants';

export const initialState = {
  seoSettings: {},
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_SEO_SETTINGS:
        draft.seoSettings = action.seoSettings;
        break;
      case RECEIVE_SEO_SETTINGS_ERROR:
        draft.error = action.error;
        break;
    }
  });

export default reducer;

export const getSEOSettings = state => state.seoSettings.seoSettings;
