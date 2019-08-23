import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.codeMirror || initialState;

const selectCodeMirrorState = () =>
  createSelector(
    selectHome,
    codeMirror => codeMirror.codeMirrorState,
  );

const selectCodeMirrorError = () =>
  createSelector(
    selectHome,
    codeMirror => codeMirror.error,
  );

export { selectHome, selectCodeMirrorError, selectCodeMirrorState };
