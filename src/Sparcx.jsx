import React from "react";

const Sparcx = ({ width = 150, height = "auto", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 120"
    width={width}
    height={height}
    className={className}
  >
    {/* "sparc" in black */}
    <text
      x="0"
      y="85"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="bold"
      fontSize="80"
      fill="black"
    >
      sparcx solutions
      
    </text>

    {/* "x" split into two parts */}
   
  </svg>
);

export default Sparcx;