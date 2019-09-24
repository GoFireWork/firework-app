import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { ic_create_new_folder as createFolder } from 'react-icons-kit/md/ic_create_new_folder';
import { ic_insert_drive_file as createFile } from 'react-icons-kit/md/ic_insert_drive_file';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Icon from 'react-icons-kit';
import { setFetchingFiles, selectFile, updateFile } from './actions';
import {
  makeSelectFiles,
  makeSelectFilesLoading,
  makeSelectFilesError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import TreeView from './components/TreeView';
import { FileBrowser, WrappenHeader } from './styles';

const key = 'files';

export function FileBrowserContainer(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [click, setClick] = useState('');

  useEffect(() => {
    props.setFetchingFiles(props.repo);
  }, []);
  console.log(click, updateFile);
  return (
    <FileBrowser>
      <WrappenHeader>
        <span>Explore</span>
        <div>
          <Icon icon={createFile} onClick={() => setClick('file')} />
          <Icon icon={createFolder} onClick={() => setClick('folder')} />
        </div>
      </WrappenHeader>
      <TreeView {...props} />
    </FileBrowser>
  );
}

FileBrowserContainer.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  files: PropTypes.object,
  setFetchingFiles: PropTypes.func,
  selectFile: PropTypes.func,
  repo: PropTypes.string,
  updateFile: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectFilesLoading(),
  error: makeSelectFilesError(),
  files: makeSelectFiles(),
});

export const mapDispatchToProps = dispatch => ({
  setFetchingFiles: repoURL => {
    dispatch(setFetchingFiles(repoURL));
  },
  selectFile: selectedIssueID => {
    dispatch(selectFile(selectedIssueID));
  },
  updateFile: files => {
    dispatch(updateFile(files));
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FileBrowserContainer);
