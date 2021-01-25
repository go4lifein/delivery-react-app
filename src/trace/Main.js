import React, {useEffect ,useState} from "react";


import "./main.scss";
import plant from "./icons/plant.svg";
import factory from "./icons/factory.svg";
import warehouse from "./icons/warehouse.svg";
import arrow from "./icons/arrow.svg";
import moment from "moment";

export default function Main({data}) {

  return (
    <div className="hero">
      <div className="BMC">
        <img src={plant} className="BMC-img" alt="BMC" />
        <div className="card">
          <h1>BMC</h1>
          <div className="section">
            <p>Recieved On:</p>
            
            <ul>
              <li>{moment(data.bmc_receive).format('DD MM YYYY')}</li>
              <li>{moment(data.bmc_receive).format('hh:mm A')}</li>
            </ul>

          </div>

          <div className="section2">
            <p>Dispatched On:</p>
            
            <ul>
              <li>{moment(data.bmc_dispatch).format('DD MM YYYY')}</li>
              <li>{moment(data.bmc_dispatch).format('hh:mm A')}</li>
            </ul>

          </div>
        </div>
      </div>
      <div className="right-arrow">
        <img src={arrow} className="right-img" alt="right-img" />
      </div>

      <div className="factory">
        <img src={factory} className="plant" alt="plant" />
        <div className="card2">
          <h1>Plant</h1>
          <div className="section3">
            <p>Recieved On:</p>
            <ul>
              <li>{moment(data.plant_receive).format('DD MM YYYY')}</li>
              <li>{moment(data.plant_receive).format('hh:mm A')}</li>
            </ul>
          </div>

          <div className="section4">
            <p>Dispatched On:</p>
            <ul>
              <li>{moment(data.plant_dispatch).format('DD MM YYYY')}</li>
              <li>{moment(data.plant_dispatch).format('hh:mm A')}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="left-arrow">
        <img src={arrow} className="left-img" alt="left-img" />
      </div>

      <div className="warehouse">
        <img src={warehouse} className="dispatch" alt="warehouse " />
        <div className="card3">
          <h1>Warehouse</h1>
          <div className="section5">
            <p>Recieved On:</p>
            <ul>
              <li>{moment(data.whs_receive).format('DD MM YYYY')}</li>
              <li>{moment(data.whs_receive).format('hh:mm A')}</li>
            </ul>
          </div>

          <div className="section6">
            <p>Dispatched On:</p>
            <ul>
              <li>{moment(data.whs_dispatch).format('DD MM YYYY')}</li>
              <li>{moment(data.whs_dispatch).format('hh:mm A')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
