import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { caretRight } from 'react-icons-kit/fa/caretRight';
import { arrowRight } from 'react-icons-kit/fa/arrowRight';
import { arrowLeft } from 'react-icons-kit/fa/arrowLeft';
import { alignLeft } from 'react-icons-kit/fa/alignLeft';
import { caretDown } from 'react-icons-kit/fa/caretDown';

import Close from '../CloseIcon';
import { setSearchFile } from '../../containers/Editor/actions';
import Wrapper, {
  Content,
  SearchWrapper,
  SearchBar,
  Replace,
  Arrow,
} from './Styled';

function Search(props) {
  const [toggle, setToogle] = useState(false);
  console.log(toggle);
  return (
    <Wrapper toggle={toggle}>
      <Arrow>
        {toggle ? (
          <div style={{ transform: 'rotate(-45deg)' }}>
            <Icon icon={caretDown} onClick={() => setToogle(!toggle)} />
          </div>
        ) : (
          <Icon icon={caretRight} onClick={() => setToogle(!toggle)} />
        )}
      </Arrow>
      <Content>
        <SearchWrapper>
          <SearchBar>
            <input placeholder="Search" />
            <span>No Results</span>
          </SearchBar>
          <Icon icon={arrowLeft} />
          <Icon icon={arrowRight} />
          <Icon icon={alignLeft} />
          <Close click={props.setSearchFile} />
        </SearchWrapper>
        {toggle && (
          <Replace>
            <input placeholder="Replace" />
          </Replace>
        )}
      </Content>
    </Wrapper>
  );
}

Search.propTypes = {
  setSearchFile: PropTypes.func,
};
const mapDispatchToProps = dispatch => ({
  setSearchFile: () => {
    dispatch(setSearchFile());
  },
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Search);
