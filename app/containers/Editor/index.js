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
} from './selectors';

const key = 'open';

export function Editor(props) {
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
  loading: makeOpenFileLoading(),
  error: makeOpenFileError(),
});

export const mapDispatchToProps = dispatch => ({
  openFile: path => {
    dispatch(openFetchingFile(path));
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
