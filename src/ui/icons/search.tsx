import React from "react";

type Props = {
  width?: number;
  height?: number;
};

const SearchIcon = ({ width = 25, height = 24 }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9849 19C16.4031 19 19.9849 15.4183 19.9849 11C19.9849 6.58172 16.4031 3 11.9849 3C7.56659 3 3.98486 6.58172 3.98486 11C3.98486 15.4183 7.56659 19 11.9849 19Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.9848 21L17.6348 16.65"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
