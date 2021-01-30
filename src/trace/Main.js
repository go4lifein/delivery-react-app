import React from 'react'



import "./main.scss";
import board from "./icons/board.svg";
import moment from "moment";
//{moment(data.plant_receive).format('DD MM YYYY')}
//{moment(data.plant_receive).format('hh:mm A')}

export default function Main({data,setLoad,load}) {
  
  return (
    <div className="hero">
      <div className = "board">
        {data && load &&
        <>
        <div className = "section1">
        
        <div className = "BMC">
          <h1 >Recieved at<br></br> BMC</h1>
          <p>{moment.utc(data.bmc_receive).format("hh:mm A")}</p>
          
        </div>
        </div>
        <div className = "section2">
        <div className = "plant-receive">
          <h1> Milk Pasteurized<br></br>at 85<span>&#176;</span>C</h1>
          <p>{moment.utc(data.plant_receive).format('hh:mm A')}</p>
        </div>
        <div className = "plant-dispatch">
      <h1>Packed in a 3-Layer<br></br>Tamper-Proof<br></br> Packaging</h1>
        <p>{moment.utc(data.plant_dispatch).format('hh:mm A')}</p>

</div>
        </div>
        <div className = "section3">
        <div className = "whs-receive">
        <h1>Arrived at <br></br> Warehouse</h1>
        <p>{moment.utc(data.whs_receive).format('hh:mm A')}</p>
      </div>
      <div className = "whs-dispatch">
        <h1>Dispatched for <br></br>Delivery</h1>
        <p>{moment.utc(data.whs_dispatch).format('hh:mm A')}</p>
      </div>
      </div>
     </>
}   {data&& 
      <img src= {board} onLoad = {() => setLoad(true)} className = "timeline" alt = "timeline" />
}
      </div>
    </div>
  );
}
