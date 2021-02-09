import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  simple: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

export default function Description(props) {
  const classes = useStyles();
  return (
    <Typography color="textSecondary" align={props.align}>
      {props.text}
      {props.children}
    </Typography>
  );
}
