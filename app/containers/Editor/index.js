import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import FileBrowser from '../FileBrowser/index';
import CodeMirror from '../CodeMirror/index';
import { EditorContainer, FileBrowserContainer } from './styles';
import { SelectedFileContextProvider } from './SelectedFileContextWrapper';

export function Editor(props) {
  return (
    <EditorContainer>
      <SelectedFileContextProvider>
        <FileBrowserContainer>
          <FileBrowser repo={props.repoURL} />
        </FileBrowserContainer>
        <CodeMirror />
      </SelectedFileContextProvider>
    </EditorContainer>
  );
}

Editor.propTypes = {
  repoURL: PropTypes.string,
};

Editor.defaultProps = {
  repoURL: 'https://github.com/Distense/distense',
};

const mapStateToProps = createStructuredSelector({});

export const mapDispatchToProps = () => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Editor);
