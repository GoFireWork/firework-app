import { OPEN_FILE, OPEN_FILE_REQUEST, OPEN_FILE_ERROR } from './constants';

export const openFetchingFile = path => ({
  type: OPEN_FILE_REQUEST,
  path,
});

export const openFileError = error => ({
  type: OPEN_FILE_ERROR,
  error,
});

export const openFile = content => ({
  type: OPEN_FILE,
  content,
});
