import React from "react";

export default function Facts({ data }) {
  return (
    <div className="facts" style={{ justifyContent: 'space-around' }}>
      {/* <img src={milkbox} className="Milk" alt="milkboxs" /> */}
      <div>
        {data && <button className="download-btn" onClick={() => window.open(data.pdf_url)}> Download Full Report</button>}
      </div>
      { data &&
        <div className="cards">
          <div className="section1">
            <div className="f1">

              <h1>PH</h1>

              <p>{data.ph}</p>
            </div>
            <div className="f2">
              <h1>FAT</h1>
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
