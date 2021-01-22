import * as React from "react";
import "./facts.scss";
import milkbox from "./icons/milkbox.svg";

export default function Facts() {
  return (
    <div className="facts">
      <img src={milkbox} className="Milk" alt="milkboxs" />
      <button className="download-btn"> Download Full Report</button>

      <div className="cards">
        <div className="section1">
          <div className="f1">
            <h1>pH</h1>
            <p>1.2</p>
          </div>
          <div className="f2">
            <h1>Fat</h1>
            <p>22</p>
          </div>
        </div>
        <div className="section2">
          <div className="f3">
            <h1>SNF</h1>
            <p>23</p>
          </div>
          <div className="f4">
            <h1>A2/A1 Split</h1>
            <p>22</p>
          </div>
        </div>
        <div className="section3">
          <div className="f5">
            <h1>Antibiotic</h1>
            <p>Negative</p>
          </div>
          <div className="f6">
            <h1>Aflatoxin</h1>
            <p>Negative</p>
          </div>
        </div>
      </div>
    </div>
  );
}
