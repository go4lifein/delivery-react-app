import React, { useEffect, useRef , useState } from "react";
import lottie from "lottie-web";
import moment from "moment";
import "./journey.scss";

export default function Journey({data}) {
  const [ journey ,setJourney ] =useState("");
useEffect(() => {

    if(!data)
    return
    let startTime = moment(data.bmc_receive);
  let endTime = moment(data.whs_dispatch);
  let duration = moment.duration(endTime.diff(startTime));

  let hours = parseInt(duration.asHours());
  let minutes = parseInt(duration.asMinutes()) % 60;
  setJourney(hours + " hours " +  minutes + " minutes ");

} ,[data])
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      speed: "2.5x",
      animationData: require("./icons/truck.json"),
    });
  }, []);
  return (
    <div className="journey">
      <div className="truck" ref={container}></div>
      <p className="time">Total  journey  time : {journey}</p>
    </div>
  );
}
