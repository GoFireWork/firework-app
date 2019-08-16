import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Wrapper from './Wrapper';

function ListItem(props) {
  const issue = props.item;
  return (
    <Wrapper onClick={() => props.selectIssue(issue.url)}>
      <Item {...props}>{issue.title}</Item>
      <em>{issue.body}</em>
    </Wrapper>
  );
}

ListItem.propTypes = {
  item: PropTypes.any,
  selectIssue: PropTypes.func,
};

export default ListItem;
