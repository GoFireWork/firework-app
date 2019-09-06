import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Controlled as CodeMirror } from 'react-codemirror2';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

function Editor(props) {
  const options = {
    lineNumbers: true,
    theme: 'material',
    mode: 'javascript',
  };
  const updateCode = () => {};
  return (
    <CodeMirror value={props.content} options={options} onChange={updateCode} />
  );
}

Editor.propTypes = {
  content: PropTypes.string,
};

export default memo(Editor);
