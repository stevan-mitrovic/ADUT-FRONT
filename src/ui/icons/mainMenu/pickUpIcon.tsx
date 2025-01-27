import React from "react";

type Props = {
  width?: number;
  height?: number;
};

const PickUpIcon = ({ width = 22, height = 22 }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.25 9.1665C19.25 15.5832 11 21.0832 11 21.0832C11 21.0832 2.75 15.5832 2.75 9.1665C2.75 6.97847 3.61919 4.88005 5.16637 3.33287C6.71354 1.7857 8.81196 0.916504 11 0.916504C13.188 0.916504 15.2865 1.7857 16.8336 3.33287C18.3808 4.88005 19.25 6.97847 19.25 9.1665Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11.9165C12.5188 11.9165 13.75 10.6853 13.75 9.1665C13.75 7.64772 12.5188 6.4165 11 6.4165C9.48122 6.4165 8.25 7.64772 8.25 9.1665C8.25 10.6853 9.48122 11.9165 11 11.9165Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PickUpIcon;
