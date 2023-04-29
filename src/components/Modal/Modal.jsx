import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import { Backdrop, Overlay, Inner } from './Modal.styled'

export const Modal = ({ onClose,children }) => {
  useEffect(()=>{
    const handleKeyClose = event => {   
      if (event.code === 'Escape') {
      onClose();
      }
    };
    window.addEventListener('keydown', handleKeyClose);
    return ()=>{
      window.removeEventListener('keydown', handleKeyClose);
    }
  }, [onClose]) 

  const handleClose = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
    
  return (
    <Backdrop>     
      <Overlay onClick={handleClose}>
        <Inner>                  
          <p>{children}</p>
        </Inner>
      </Overlay>      
    </Backdrop>                      
  );  
}

Modal.propTypes = {   
  onClose:PropTypes.func.isRequired,    
}
