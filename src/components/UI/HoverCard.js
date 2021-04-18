import React from 'react';
import useDelayedState from '../../hooks/useDelayedState';
import '../../styles/hover-card.css'

function HoverCard({trigger, children, timegap = 400, ...props}) {
  const [open, onHoverUpdateCountAfterDelay] = useDelayedState(false, timegap);
  
  const anchorRef = React.useRef(null);

  const posStyle = {};
  if(anchorRef.current) {
    let H = window.innerHeight;
    const {top, height} = anchorRef.current.getBoundingClientRect();
    if(top < H/2) {
      posStyle.top = `${height + 10}px`;
    } else {
      posStyle.bottom = `${height + 10}px`;
    }
  }
  console.log(trigger, posStyle)
  
  return (
    <div
      onMouseOver={() => onHoverUpdateCountAfterDelay(true)}
      onMouseOut={() => onHoverUpdateCountAfterDelay(false)}
      className="custom-hover-card-container"
      {...props}
    >
      <div
        ref={anchorRef}
      >{trigger}</div>
      <div 
        className={`${open ? 'visible': ''} custom-hover-card`}
        style={posStyle}
      >{children}</div>
    </div>
  );
};

export default HoverCard;