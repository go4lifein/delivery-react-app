import React from 'react';
import '../../styles/overlay.css';

function Overlay({mainClass = '', overlayClass = '', main, overlay, ...props}) {
  return (
    <div className='overlay-container' {...props}>
      <div className={`main-content`}>
        {main}
      </div>
      <div className={`overlay-content`}>
        {overlay}
      </div>
    </div>
  );
}

export default Overlay;