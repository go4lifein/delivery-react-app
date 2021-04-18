import React from 'react';

const Icon = ({src}) => {
  return (
    <div className="custom-icon flex center">
      <img height={"100%"} width={"100%"} src={src} alt="custom-icon" />
    </div>
  );
};

export default Icon;