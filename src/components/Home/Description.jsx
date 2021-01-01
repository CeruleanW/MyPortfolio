import { makeStyles } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import React from "react";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

export default function Description(props) {
  const classes = useStyles();
  return (
    <Typography color="textSecondary" className={classes.text}>
      {props.children}
    </Typography>
  );
}
