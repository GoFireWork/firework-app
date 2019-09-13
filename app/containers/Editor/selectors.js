import { createSelector } from 'reselect';
import { initialState } from './reducer';

const currentFile = state => state.editor || initialState;

const makeCurrentFileContent = () =>
  createSelector(
    currentFile,
    state => state.content,
  );

const makeCurrentFileName = () =>
  createSelector(
    currentFile,
    state => state.name,
  );

const makeCurrentFilePath = () =>
  createSelector(
    currentFile,
    state => state.path,
  );

const makeCurrentFileError = () =>
  createSelector(
    currentFile,
    state => state.error,
  );

const makeCurrentFileLoading = () =>
  createSelector(
    currentFile,
    state => state.loading,
  );

export {
  makeCurrentFileContent,
  makeCurrentFileLoading,
  makeCurrentFileError,
  makeCurrentFileName,
  makeCurrentFilePath,
};
