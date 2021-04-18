import React from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const Searchbox = (props) => {
  return (
    <div className="relative" style={{display: 'inline-block'}}>
      <TextField
        {...props}
        size="small"
        variant="outlined"
        placeholder="Search"
      />
      <div style={{position: 'absolute', top: '8px', right: 10}}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default Searchbox;