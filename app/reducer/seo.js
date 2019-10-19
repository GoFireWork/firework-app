import produce from 'immer';
import {
  FETCH_SEO_SETTINGS,
  RECEIVE_SEO_SETTINGS,
  RECEIVE_SEO_SETTINGS_ERROR,
  SAVE_SEO_SETTINGS,
} from '../actionType/seo';

export const initialState = {
  settings: {
    title: '',
    description: '',
  },
  isFetching: false,
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const seo = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_SEO_SETTINGS:
        draft.settings.title = action.settings.title;
        draft.settings.description = action.settings.description;
        draft.isFetching = false;
        break;
      case SAVE_SEO_SETTINGS:
        draft.settings.title = action.settings.title;
        draft.settings.description = action.settings.description;
        break;
      case RECEIVE_SEO_SETTINGS_ERROR:
        draft.error = action.error;
        break;
      case FETCH_SEO_SETTINGS:
        draft.isFetching = true;
        break;
    }
  });

export default seo;
