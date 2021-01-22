import * as React from "react";

import "./main.scss";
import plant from "./icons/plant.svg";
import factory from "./icons/factory.svg";
import warehouse from "./icons/warehouse.svg";
import right from "./icons/right.svg";
import left from "./icons/left.svg";
export default function Main() {
  return (
    <div className="hero">
      <div className="BMC">
        <img src={plant} className="BMC-img" alt="BMC" />
        <div className="card">
          <h1>BMC</h1>
          <div className="section">
            <p>Recieved On:</p>
            <ul>
              <li>231032</li>
              <li>23131</li>
            </ul>
          </div>

          <div className="section2">
            <p>Dispatched On:</p>
            <ul>
              <li>23103sd2</li>
              <li>231sds31</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right-arrow">
        <img src={right} className="right-img" alt="right-img" />
      </div>

      <div className="factory">
        <img src={factory} className="plant" alt="plant" />
        <div className="card2">
          <h1>Plant</h1>
          <div className="section3">
            <p>Recieved On:</p>
            <ul>
              <li>231032</li>
              <li>23131</li>
            </ul>
          </div>

          <div className="section4">
            <p>Dispatched On:</p>
            <ul>
              <li>23103sd2</li>
              <li>231sds31</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="left-arrow">
        <img src={left} className="left-img" alt="left-img" />
      </div>

      <div className="warehouse">
        <img src={warehouse} className="dispatch" alt="warehouse " />
        <div className="card3">
          <h1>Warehouse</h1>
          <div className="section5">
            <p>Recieved On:</p>
            <ul>
              <li>231032</li>
              <li>23131</li>
            </ul>
          </div>

          <div className="section6">
            <p>Dispatched On:</p>
            <ul>
              <li>23103sd2</li>
              <li>231sds31</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
