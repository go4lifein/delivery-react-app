import { CircularProgress } from '@material-ui/core';
import React from 'react';

const Loading = () => {
  return (
    <div className="flex center middle p-10">
      <CircularProgress />
    </div>
  );
};

export default Loading;