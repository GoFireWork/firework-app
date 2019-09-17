import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

import Files from '../FileBrowser/index';
import FileTabs from './Editor';
import { Container, LeftSide, MainDiv } from './styles';
import CodeMirrorEditor from '../CodeMirror';
import { openFetchingFile } from './actions';
import {
  makeCurrentFileName,
  makeCurrentFileLoading,
  makeCurrentFileError,
  makeCurrentFileContent,
  makeCurrentFilePath,
} from './selectors';

const key = 'editor';

export function Editor(props) {
  const repoURL = `https://github.com/GoFireWork/firework-app`;

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  return (
    <div>
      <Helmet>
        <title>FireWork</title>
        <meta name="description" content="FireWork" />
      </Helmet>
      <Container>
        <LeftSide>
          <Files repo={repoURL} openFile={props.openFile} />
        </LeftSide>
        <MainDiv>
          <FileTabs {...props} />
          <CodeMirrorEditor {...props} />
        </MainDiv>
      </Container>
    </div>
  );
}

Editor.propTypes = {
  repoURL: PropTypes.string,
  openFile: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  content: makeCurrentFileContent(),
  name: makeCurrentFileName(),
  path: makeCurrentFilePath(),
  loading: makeCurrentFileLoading(),
  error: makeCurrentFileError(),
});

export const mapDispatchToProps = dispatch => ({
  openFile: (path, name) => {
    dispatch(openFetchingFile(path, name));
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Editor);
