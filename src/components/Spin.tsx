/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useEffect, useState } from "react";
import { Winwheel } from "winwheel-module";

export default function Spin() {
  const wheelInstance = useRef<any>();
  const [isSpininng, setIsSpininng] = useState(false);

  const alertPrize = (segment: any) => {
    alert(`You have won ${segment.text}`);
  };

  useEffect(() => {
    wheelInstance.current = new Winwheel({
      numSegments: 8, // Specify number of segments.
      outerRadius: 212, // Set outer radius so wheel fits inside the background.
      textFontSize: 28, // Set font size as desired.
      // Define segments including colour and text.
      segments: [
        { fillStyle: "#eae56f", text: "Prize 1" },
        { fillStyle: "#89f26e", text: "Prize 2" },
        { fillStyle: "#7de6ef", text: "Prize 3" },
        { fillStyle: "#e7706f", text: "Prize 4" },
        { fillStyle: "#eae56f", text: "Prize 5" },
        { fillStyle: "#89f26e", text: "Prize 6" },
        { fillStyle: "#7de6ef", text: "Prize 7" },
        { fillStyle: "#e7706f", text: "Prize 8" },
      ],
      // Specify the animation to use.
      animation: {
        type: "spinToStop",
        duration: 5, // Duration in seconds.
        spins: 8, // Number of complete spins.
        callbackFinished: alertPrize,
      },
    });
  }, []);

  const reset = () => {
    wheelInstance.current.stopAnimation(false);
    wheelInstance.current.rotationAngle = 0;
    wheelInstance.current.draw();
    setIsSpininng(false);
  };

  const spin = () => {
    if (isSpininng) {
      return;
    }

    setIsSpininng(true);
    wheelInstance.current.startAnimation();
    setTimeout(() => {
      reset();
    }, 5600);
  };

  return (
    <div className="grid grid-rows-1 md:grid-cols-4 2xl:grid-cols-12 items-center gap-8">
      <div className="hidden 2xl:block 2xl:col-span-3"></div>
      <div className="xl:col-span-3 flex justify-center">
        <canvas id="canvas" width="434" height="434" className="w-5/6">
          <p className="text-white text-center">
            Sorry, your browser doesn't support canvas. Please try another.
          </p>
        </canvas>
      </div>

      <div className="xl:col-span-1 flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={spin}
          disabled={isSpininng}
        >
          Spin
        </button>
      </div>
      <div className="hidden 2xl:block 2xl:col-span-4"></div>
    </div>
  );
}
