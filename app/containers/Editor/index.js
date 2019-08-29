import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import FileBrowser from '../FileBrowser/index';
import CodeMirror from '../CodeMirror/index';

export function Editor(props) {
  return (
    <div>
      <FileBrowser repo={props.repoURL} />
      <CodeMirror />
    </div>
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
