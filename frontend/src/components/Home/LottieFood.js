import React from "react";
import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "./lf20_pxb8alme.json";

export default function Food() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 150, height: 150 }}
    />
  );
}
