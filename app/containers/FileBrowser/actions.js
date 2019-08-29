import {
  LOAD_FILES_REQUEST,
  FILES_LOADING_ERROR,
  LOAD_FILES,
  GIT_DIR_SETTING_ERROR,
  SELECTED_FILE_ID,
} from './constants';

export const setFetchingFiles = repoURL => ({
  type: LOAD_FILES_REQUEST,
  repoURL,
});

export const setFetchingFilesError = error => ({
  type: FILES_LOADING_ERROR,
  error,
});

export const setGitDirError = error => ({
  type: GIT_DIR_SETTING_ERROR,
  error,
});

export const setFiles = files => ({
  type: LOAD_FILES,
  files,
});

export const setSelectedFile = selectedFileID => ({
  type: SELECTED_FILE_ID,
  selectedFileID,
});

export const selectFile = selectedFileID => dispatch => {
  dispatch(setSelectedFile(selectedFileID));
};
