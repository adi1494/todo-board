import React, { useEffect } from 'react';
import './Modal.css'

const Modal = (props) => {
  useEffect(() => {
    const close = (e) => {
      if(e.keyCode === 27){
        props.onClose()
      }
    }
    window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
})
  return (
    <div
      className="modal"
      onClick={() => {
        if (props.onClose) props.onClose()
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        {props.children}
      </div>
    </div >
  );
};

export default Modal;
