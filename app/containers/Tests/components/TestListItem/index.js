import React from 'react';
import PropTypes from 'prop-types';

import FailingTest from './FailingTest';
import Wrapper from './Wrapper';

function TestListItem(props) {
  const test = props.item;
  const testPaths = test.testPath;
  return (
    <Wrapper>
      <FailingTest {...props}>{testPaths[testPaths.length - 1]}</FailingTest>
    </Wrapper>
  );
}

TestListItem.propTypes = {
  item: PropTypes.any,
};

export default TestListItem;
