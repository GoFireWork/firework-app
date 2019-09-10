/**
 * Issues selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const openFile = state => state.open || initialState;

const makeOpenFile = () =>
  createSelector(
    openFile,
    state => state.content,
  );

const makeOpenFileName = () =>
  createSelector(
    openFile,
    state => state.name,
  );

const makeOpenFilePath = () =>
  createSelector(
    openFile,
    state => state.path,
  );

const makeOpenFileError = () =>
  createSelector(
    openFile,
    state => state.error,
  );

const makeOpenFileLoading = () =>
  createSelector(
    openFile,
    state => state.loading,
  );

export {
  makeOpenFile,
  makeOpenFileLoading,
  makeOpenFileError,
  makeOpenFileName,
  makeOpenFilePath,
};
