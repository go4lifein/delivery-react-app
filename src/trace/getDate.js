import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./getdate.scss";

export default function GetDate( {startDate ,setStartDate ,setIsA2 ,isA2}) {
  

  
  return (
    <div className="datepicker">
      <DatePicker
        className="box"
        selected={startDate}
        
        onChange={(date) => setStartDate(date)}
      />
      <div className="tabs">
        <button
          className= {`a2 ${isA2 ? "primary" : ""}`}
          
          onClick={() => setIsA2(true)}
          name="A2"
          
        >
          A2
        </button>
        <button
          className={`b2 ${!isA2 ? "primary" : "" }`}
         
          onClick={() => setIsA2(false)}
          name="B2"
        >
          B2
        </button>
      </div>
    </div>
  );
}
