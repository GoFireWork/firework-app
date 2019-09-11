import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Li from './li';

function Dropdown(props) {
  const wrapperRef = useRef(null);
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      props.setVisible(false);
    }
  };
  return (
    <Wrapper ref={wrapperRef}>
      {props.options.length &&
        props.options.map(opt => (
          <div>
            {opt.component ? (
              opt.component
            ) : (
              <Li>
                <a href={opt.value}>{opt.label && opt.label}</a>
                {opt.tag && opt.tag}
              </Li>
            )}
          </div>
        ))}
    </Wrapper>
  );
}
Dropdown.propTypes = {
  options: PropTypes.array,
  setVisible: PropTypes.func,
};
export default Dropdown;
