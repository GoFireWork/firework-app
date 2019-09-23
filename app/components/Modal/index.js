import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from 'components/CloseIcon';

import ModalDialog from './ModalDialog';
import ModalContent from './ModalContent';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

function Modal(props) {
  const { onClose } = props;
  const wrapperRef = useRef(null);
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onClose(false);
    }
  };
  return (
    <ModalDialog>
      <ModalContent width={props.width} ref={wrapperRef}>
        <ModalHeader>
          <h4>{props.title}</h4>
          <CloseIcon click={() => onClose(false)} />
        </ModalHeader>
        <ModalBody>{props.content}</ModalBody>
        <ModalFooter />
      </ModalContent>
    </ModalDialog>
  );
}

Modal.propTypes = {
  width: PropTypes.number,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onClose: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default Modal;
