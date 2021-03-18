import React from 'react';

import { Typography } from '@material-ui/core';

function NotFound(props) {
  return (
    <div className="p-10">
      <Typography variant="h2">
        What the 404?
      </Typography>
      <div className="flex center" style={{maxHeight: 400, maxWidth: '100%'}}>
        <img
          style={{maxHeight: 400, maxWidth: '100%'}}
          src="https://cdn.dribbble.com/users/21546/screenshots/4815369/yelp_emptystates_business.gif" 
          alt="not-found" 
        />
      </div>
    </div>
  )
}
export default NotFound;