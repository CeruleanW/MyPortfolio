import React from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SVGLine from './SVGLine';
import { Typography, Grid } from "@material-ui/core";

export default function More() {
    return (
        <Grid container>
        <Grid item xs={3}>
          <ExpandMoreIcon />
          <Typography noWrap>Explore My Projects </Typography>
        </Grid>
        <Grid item xs={3}>
          <SVGLine />
        </Grid>
      </Grid>
    )
}
