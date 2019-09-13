import {
  CURRENT_FILE,
  CURRENT_FILE_REQUEST,
  CURRENT_FILE_ERROR,
  UPDATE_CURRENT_FILE_CONTENTS,
} from './constants';

export const openFetchingFile = (path, name) => ({
  type: CURRENT_FILE_REQUEST,
  path,
  name,
});

export const currentFileError = error => ({
  type: CURRENT_FILE_ERROR,
  error,
});

export const currentFile = ({ content, path, name }) => ({
  type: CURRENT_FILE,
  content,
  path,
  name,
});

export const updateCurrentFileContents = content => ({
  type: UPDATE_CURRENT_FILE_CONTENTS,
  content,
});
