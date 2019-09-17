import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { PopupWrraper, PopupContent } from './styled';

function Popup(props) {
  const { setVisible } = props;
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
    <PopupWrraper ref={wrapperRef}>
      <PopupContent>{props.content}</PopupContent>
    </PopupWrraper>
  );
}

Popup.propTypes = {
  setVisible: PropTypes.func,
  content: PropTypes.object,
};

export default Popup;
