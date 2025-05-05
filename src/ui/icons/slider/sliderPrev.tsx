import React from "react";

type Props = {
  width?: number;
  height?: number;
};

const SliderPrevIcon = ({ width = 12, height = 22 }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 21L1 11L11 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default SliderPrevIcon;
