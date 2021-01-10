import React from "react";
import grey from "@material-ui/core/colors/grey";
import { makeStyles } from "@material-ui/core/styles";

export default function SVGLine(props) {
  // const useStyles = makeStyles((theme) => ({
  //   simple: {
  //     height: props.height + 'px',
  //     width: (props.height * 2) + 'px',
  //     display: 'inline-block',
  //   },
  // }));
  // const classes = useStyles();

  return (
      <svg height={props.height} width={80}>
        <g fill="none">
          <path stroke={grey[500]} d="M5 20 l215 0" />
        </g>
      </svg>
  );
}

// height={props.height} width="80"
// className={classes.simple}
