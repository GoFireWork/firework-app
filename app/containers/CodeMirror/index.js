import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Controlled as ControlledCodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import { createStructuredSelector } from 'reselect';

// import H2 from 'components/H2';
// import Section from './Section';
// import messages from './messages';
import { changeCodeMirrorState } from './actions';
import { selectCodeMirrorState, selectCodeMirrorError } from './selectors';
import reducer from './reducer';
require('codemirror/mode/javascript/javascript');

export function CodeMirror(props) {
  useEffect(() => {}, []);

  return (
    <article>
      <div>
        <ControlledCodeMirror
          value={props.codeMirrorState}
          options={{
            mode: 'javascript',
            lineNumbers: true,
          }}
          onBeforeChange={(editor, data, value) => {
            props.onChangeCodeMirror(value);
          }}
          onChange={(editor, data, value) => {
            props.onChangeCodeMirror(value);
          }}
        />
      </div>
    </article>
  );
}

CodeMirror.propTypes = {
  // loading: PropTypes.bool,
  codeMirrorState: PropTypes.string,
  onChangeCodeMirror: PropTypes.func,
  // codeMirrorError: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
const mapStateToProps = createStructuredSelector({
  codeMirrorState: selectCodeMirrorState(),
  codeMirrorError: selectCodeMirrorError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeCodeMirror: value => dispatch(changeCodeMirrorState(value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CodeMirror);
