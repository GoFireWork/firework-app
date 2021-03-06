import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Wrapper, { ComponentWrapper } from './Wrapper';
import Li from './li';

function Dropdown(props) {
  const { options, setVisible } = props;
  const wrapperRef = useRef(null);
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setVisible(false);
    }
  };
  return (
    <Wrapper ref={wrapperRef}>
      {options.length &&
        options.map(opt => (
          <div>
            {opt.component ? (
              <ComponentWrapper>{opt.component}</ComponentWrapper>
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
