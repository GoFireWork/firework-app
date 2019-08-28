import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Wrapper from './Wrapper';

function FileListItem(props) {
  return (
    <Wrapper>
      <Item>
        <p>{props.item}</p>
      </Item>
    </Wrapper>
  );
}

FileListItem.propTypes = {
  item: PropTypes.any,
};

export default FileListItem;
