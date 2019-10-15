import produce from 'immer';
import {
  RECEIVE_SEO_SETTINGS,
  RECEIVE_SEO_SETTINGS_ERROR,
  SAVE_SEO_SETTINGS,
} from './constants';

export const initialState = {
  seoSettings: {
    title: '',
    description: '',
  },
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_SEO_SETTINGS:
        draft.seoSettings.title = action.seoSettings.title;
        draft.seoSettings.description = action.seoSettings.description;
        break;
      case SAVE_SEO_SETTINGS:
        draft.seoSettings.title = action.seoSettings.title;
        draft.seoSettings.description = action.seoSettings.description;
        break;
      case RECEIVE_SEO_SETTINGS_ERROR:
        draft.error = action.error;
        break;
    }
  });

export default reducer;
