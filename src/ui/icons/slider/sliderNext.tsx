import React from "react";

type Props = {
  width?: number;
  height?: number;
};

const SliderNextIcon = ({ width = 12, height = 22 }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L11 11L1 21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default SliderNextIcon;
