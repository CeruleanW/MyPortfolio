import React from "react";
import grey from "@material-ui/core/colors/grey";

export default function SVGLine(props) {
  return (
      <svg height={props.height} width={80}>
        <g fill="none">
          <path stroke={grey[500]} d="M5 20 l215 0" />
        </g>
      </svg>
  );
}

