import { useCallback, useEffect } from 'react';
import { ReactComponent as IconClose } from '../../images/icons/icon-close.svg';
import PropTypes from 'prop-types';

import { CloseBtn, ModalContainer, Overlay } from './Modal.styled';

export const Modal = ({ children, onClose }) => {
  const memoKeyClose = useCallback(handleKeyClose, [handleKeyClose]);

  useEffect(() => {
    window.addEventListener('keydown', memoKeyClose);

    return () => {
      window.removeEventListener('keydown', memoKeyClose);
    };
  }, [memoKeyClose]);

  function handleKeyClose(evt) {
    if (evt.code === 'Escape') {
      onClose();
    }
  }

  function handleClose(evt) {
    const { target, currentTarget } = evt;

    if (target === currentTarget) {
      onClose();
    }
  }

  function handleCloseBtn() {
    onClose();
  }

  return (
    <Overlay onClick={handleClose}>
      <ModalContainer>
        <CloseBtn onClick={handleCloseBtn}>
          <IconClose/>
        </CloseBtn>
        {children}
      </ModalContainer>
    </Overlay>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};