import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import { ic_close as close } from 'react-icons-kit/md/ic_close';

import Wrapper from './Wrapper';

function CloseIcon(props) {
  return (
    <Wrapper>
      <Icon icon={close} onClick={() => props.click(false)} />
    </Wrapper>
  );
}

CloseIcon.propTypes = {
  click: PropTypes.func.isRequired,
};

export default CloseIcon;
