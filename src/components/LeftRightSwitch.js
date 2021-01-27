import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';

function LeftRightSwitch(props) {
  const {left, onLeft, right, onRight, center, leftIcon, rightIcon, disabledLeft = false, disabledRight = false, style={}, className = ""} = props;
  return (
    <div 
      className={`flex p-10 middle ${className}`}
      style={{
        justifyContent: 'space-around',
        ...style
      }}
    >
      <div>
        {
          left ?
          left :
          <IconButton 
            size="small"
            onClick={onLeft}
            disabled={disabledLeft}
            style={{border: '1px solid rgba(0, 0, 0, 0.23)'}}
          >
            {leftIcon ? leftIcon : <ArrowLeft />}
          </IconButton>
        }

      </div>
      <div className="flex center middle" style={{flexGrow: 0.5, paddingRight: 10, paddingLeft: 10}}>
        {center}
      </div>
      <div>
        {
          right ?
          right :
          <IconButton 
            size="small"
            onClick={onRight}
            disabled={disabledRight}
            style={{border: '1px solid rgba(0, 0, 0, 0.23)'}} 
          >
            {rightIcon ? rightIcon : <ArrowRight />}
          </IconButton>
        }
      </div>
    </div>
  );
};

export default LeftRightSwitch;