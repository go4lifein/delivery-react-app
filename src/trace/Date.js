import React from "react";
import moment from 'moment';

export default function GetDate( {startDate}) {
  
  return (
    <div className="flex center">
      <div className="box" style={{flex: 1}}>
        {moment(startDate).format('DD MMM, YYYY')}
      </div>
    </div>
  );
}
