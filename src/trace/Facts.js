import  React , { useEffect } from "react";
import "./facts.scss";

import milkbox from "./icons/milkbox.svg";

export default function Facts( {data} ) {

   
   
  return (
    <div className="facts">
      <img src={milkbox} className="Milk" alt="milkboxs" />
    {data &&<button className="download-btn" onClick = {() => window.open(data.pdf_url)}> Download Full Report</button>}
    { data&& 
      <div className="cards">
        <div className="section1">
          <div className="f1">
    
            <h1>pH</h1>
            
            <p>{data.ph}</p>
          </div>
          <div className="f2">
            <h1>Sodium </h1>
            <p>{data.sodium_content}</p>
          </div>
        </div>
        <div className="section2">
          <div className="f3">
            <h1>SNF</h1>
            <p>{data.snf}</p>
          </div>
          <div className="f4">
            <h1>MBRT</h1>
            <p>{data.mbrt}</p>
          </div>
        </div>
        <div className="section3">
          <div className="f5">
            <h1>Antibiotic</h1>
            <p>{data.antibiotics1 ? "Postive" : "Negative"}</p>
          </div>
          <div className="f6">
            <h1>Aflatoxin</h1>
            <p>{data.aflatoxin ? "Positive" :" Negative"}</p>
          </div>
        </div>
      </div>
}
    </div>
  );
}
