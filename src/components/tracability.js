import React from "react";
import logo from "../fonts/logo.webp";
import "../css/trace.scss";

export default function Tracability() {
  return (
    <div className="trace">
      <img src={logo} alt="logo" className="logo" />
      <h1 className="heading"></h1>
    </div>
  );
}
