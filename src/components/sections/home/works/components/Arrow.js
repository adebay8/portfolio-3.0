import React from "react";
import { ButtonArrow } from "./style";

const Arrow = ({ width = 72, height = 22, color = "#4831d4" }) => {
  return (
    <ButtonArrow
      width={width}
      height={height}
      viewBox="0 0 72 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="0"
        d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
      />
    </ButtonArrow>
  );
};

export default Arrow;
