import React from "react";
import { Box, Container, Grid } from "@material-ui/core";

export default function WithCenter(props) {
  return (
    <Container>
      <Grid container justify="center" spacing={1}>
        {props.children}
      </Grid>
    </Container>
  );
}