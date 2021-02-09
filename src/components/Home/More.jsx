import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SVGLine from "./SVGLine";
import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function More(props) {
    //Styles
    const textFont = "'Quicksand', sans-serif";
    const useStyles = makeStyles((theme) => ({
      simple: {
        height: props.height + 'px',
        lineHeight: props.height + 'px',
        display: 'inline-block',
        // textAlign: 'center',
      },
      text: {
        fontFamily: textFont,
        textTransform: 'uppercase',
      }
    }));
    const classes = useStyles();

  return (
    <Box>
        <ExpandMoreIcon className={classes.simple} style={{marginLeft: '-6px'}}/>
        <Typography noWrap className={`${classes.simple} ${classes.text}`}>See My Projects </Typography>
        <SVGLine height={props.height}/>
    </Box>
  );
}
