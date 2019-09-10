import { OPEN_FILE, OPEN_FILE_REQUEST, OPEN_FILE_ERROR } from './constants';

export const openFetchingFile = (path, name) => ({
  type: OPEN_FILE_REQUEST,
  path,
  name,
});

export const openFileError = error => ({
  type: OPEN_FILE_ERROR,
  error,
});

export const openFile = ({ content, path, name }) => ({
  type: OPEN_FILE,
  content,
  path,
  name,
});
