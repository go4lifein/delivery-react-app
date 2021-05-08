import React, { useRef } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './css/side-panel.css';

const SidePanel = ({header, onClose, children, visible = false}) => {

  const container = useRef(null);
  const sidepanel = useRef(null);
  const handleClickOutside = () => onClose();
  const handleClickInside = (e) => e.stopPropagation();

  return (
    <div 
      className={`side-panel-container ${visible ? 'visible' : 'hidden'}`} 
      ref={container} 
      onClick={handleClickOutside}
    >
      <div 
        className="side-panel" 
        ref={sidepanel} 
        onClick={handleClickInside}
      >
        <div className="side-panel-header flex middle space-bw p-10">
          <h3>{header}</h3>
          
            <CloseIcon 
              fontSize="small" 
              className="pointer" 
              onClick={onClose}
              style={{cursor: 'pointer'}}
            />
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;