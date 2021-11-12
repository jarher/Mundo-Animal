import React from "react";
import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "./lf20_ygnulsbx.json";

export default function Toys() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 150, height: 150 }}
    />
  );
}
