/**
 * Issues selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectFiles = state => state.files || initialState;

const makeSelectFiles = () =>
  createSelector(
    selectFiles,
    state => state.files,
  );

const makeSelectFilesError = () =>
  createSelector(
    selectFiles,
    state => state.error,
  );

const makeSelectFilesLoading = () =>
  createSelector(
    selectFiles,
    state => state.loading,
  );

export { makeSelectFiles, makeSelectFilesLoading, makeSelectFilesError };
