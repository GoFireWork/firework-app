import { writeFile } from '../../utils/git';

import {
  CURRENT_FILE,
  CURRENT_FILE_REQUEST,
  CURRENT_FILE_ERROR,
  UPDATE_CURRENT_FILE_CONTENTS,
  OPEN_SEARCH_COMPONENT,
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

export const saveCurrentFile = async () => {
  const editorState = window.store.getState();
  const currentFilePath = editorState.path;
  const currentFileContent = editorState.content;
  if (currentFilePath && currentFileContent) {
    await writeFile(currentFilePath, currentFileContent);
  }
};

export const setSearchFile = value => ({
  type: OPEN_SEARCH_COMPONENT,
  value,
});
