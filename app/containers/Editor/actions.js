import * as git from '../../utils/git';

import {
  CURRENT_FILE,
  CURRENT_FILE_REQUEST,
  CURRENT_FILE_ERROR,
  UPDATE_CURRENT_FILE_CONTENTS,
  SAVE_FILE,
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

export const saveFile = path => ({
  type: SAVE_FILE,
  path,
});

export const saveCurrentFile = async () => {
  const currentFilePath = window.store.getState().editor.path;
  const currentFileContent = window.store.getState().editor.content;
  if (currentFilePath && currentFileContent)
    await git.writeFile(currentFilePath, currentFileContent);
};
