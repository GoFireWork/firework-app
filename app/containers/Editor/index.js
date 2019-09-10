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
import { Container, LeftSide, MainDiv } from './styles';
import CodeEditor from './Editor';
import { openFetchingFile } from './actions';
import {
  makeOpenFile,
  makeOpenFileError,
  makeOpenFileLoading,
  makeOpenFileName,
  makeOpenFilePath,
} from './selectors';

const key = 'open';

export function Editor(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div>
      <Helmet>
        <title>Gnarwork</title>
        <meta name="description" content="Gnarwork" />
      </Helmet>
      <Container>
        <LeftSide>
          <Files repo={props.repoURL} openFile={props.openFile} />
        </LeftSide>
        <MainDiv>
          <CodeEditor {...props} />
        </MainDiv>
      </Container>
    </div>
  );
}

Editor.propTypes = {
  repoURL: PropTypes.string,
  openFile: PropTypes.func,
};

Editor.defaultProps = {
  repoURL: 'https://github.com/Distense/distense-ui',
};

const mapStateToProps = createStructuredSelector({
  content: makeOpenFile(),
  name: makeOpenFileName(),
  path: makeOpenFilePath(),
  loading: makeOpenFileLoading(),
  error: makeOpenFileError(),
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
