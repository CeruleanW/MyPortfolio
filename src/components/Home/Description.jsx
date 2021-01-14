import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  simple: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

export default function Description(props) {
  const classes = useStyles();
  return (
    <Typography color="textSecondary">
      {props.text}
      {props.children}
    </Typography>
  );
}
