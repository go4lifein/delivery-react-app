import  React , { useEffect } from "react";
import "./facts.scss";

import milkbox from "./icons/milkbox.svg";

export default function Facts( {data} ) {

   
   
  return (
    <div className="facts">
      <img src={milkbox} className="Milk" alt="milkboxs" />
    {data &&<button className="download-btn" onClick = {() => window.open(data.pdf_url)}> Download Test Report</button>}
    { data&& 
      <div className="cards">
        <div className="section1">
          <div className="f1">
    
            <h1>pH</h1>
            
            <p>{data.ph}</p>
          </div>
          <div className="f2">
            <h1>Fat </h1>
            <p>{data.fat} %</p>
          </div>
        </div>
        <div className="section2">
          <div className="f3">
            <h1>SNF</h1>
            <p>{data.snf} %</p>
          </div>
          <div className="f4">
            <h1>MBRT</h1>
            <p>{data.mbrt} mins</p>
          </div>
        </div>
        
      </div>
}
    </div>
  );
}
