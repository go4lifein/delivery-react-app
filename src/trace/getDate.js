import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./getdate.scss";

export default function GetDate() {
  const [startDate, setStartDate] = useState(new Date());
  const [state, setState] = useState({
    A2: true,
    B2: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className="datepicker">
      <DatePicker
        className="box"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <div className="tabs">
        <button
          className="a2"
          checked={state.A2}
          onChange={handleChange}
          name="A2"
          color="primary"
          inputProps={{ "aria-label": "primary checkbox" }}
        >
          A2
        </button>
        <button
          className="b2"
          checked={state.checkedB}
          onChange={handleChange}
          name="B2"
          inputProps={{ "aria-label": "secondary checkbox" }}
        >
          B2
        </button>
      </div>
    </div>
  );
}
