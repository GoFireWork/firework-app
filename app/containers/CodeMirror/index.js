import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Controlled as ControlledCodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  makeCurrentFileContent,
  OpenSearchComponent,
} from '../Editor/selectors';
import { updateCurrentFileContents } from '../Editor/actions';
import Search from '../../components/Search';

require('codemirror/mode/javascript/javascript');

export function CodeMirrorEditor(props) {
  return (
    <div>
      {props.search && <Search />}

      <ControlledCodeMirror
        value={props.content}
        options={{
          mode: 'javascript',
          lineNumbers: true,
          theme: 'material',
        }}
        onBeforeChange={(editor, data, value) => {
          props.changeContent(value);
        }}
        onChange={(editor, data, value) => {
          props.changeContent(value);
        }}
      />
    </div>
  );
}

CodeMirrorEditor.propTypes = {
  content: PropTypes.string,
  changeContent: PropTypes.func,
  search: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  content: makeCurrentFileContent(),
  search: OpenSearchComponent(),
});

export const mapDispatchToProps = dispatch => ({
  changeContent: content => {
    dispatch(updateCurrentFileContents(content));
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CodeMirrorEditor);
