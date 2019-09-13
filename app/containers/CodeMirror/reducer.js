/*
import produce from 'immer';
import { CODE_MIRROR_STATE } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  codeMirrorState: '',
};

/!* eslint-disable default-case, no-param-reassign *!/
const codeMirrorReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CODE_MIRROR_STATE:
        draft.codeMirrorState = action.codeMirrorState;
        break;
    }
  });

export default codeMirrorReducer;
*/
