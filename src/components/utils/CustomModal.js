import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './css/custom-modal.css';

const CustomModal = ({header, onClose, children, visible = false}) => {

  return (
    <div className={`custom-modal ${visible ? 'visible' : 'hidden'}`}>
      <div className="custom-modal-header flex middle space-bw p-10">
        <h2>{header}</h2>
        <div className='icon-btn'>
          <CloseIcon 
            fontSize="large" 
            className="pointer" 
            onClick={onClose}
          />
        </div>
      </div>
      <div className="content p-10">
        {children}
      </div>
    </div>
  );
};

export default CustomModal;