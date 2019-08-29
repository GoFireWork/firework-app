import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { setFetchingFiles, selectFile } from './actions';
import {
  makeSelectFiles,
  makeSelectFilesLoading,
  makeSelectFilesError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import FileList from './components/FileList';

const key = 'files';

export function FilesContainer(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  console.log(props.repo);
  useEffect(() => {
    props.setFetchingFiles(props.repo);
  }, []);

  return (
    <article>
      <div>
        <FileList {...props} />
      </div>
    </article>
  );
}

FilesContainer.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  files: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  setFetchingFiles: PropTypes.func,
  selectFile: PropTypes.func,
  repo: PropTypes.string,
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
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FilesContainer);
