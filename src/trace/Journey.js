import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import "./journey.scss";

export default function Journey() {
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
      <p className="time">Total journey time :</p>
    </div>
  );
}
