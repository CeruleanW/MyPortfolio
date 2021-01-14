import PropTypes from "prop-types";
import React, { useState } from "react";
import { Typography, Box, Container, Avatar, Grid } from "@material-ui/core";
import mainPhoto from "../../assets/img/avatar1.jpg";
import Image from "material-ui-image";
import Description from "./Description";

import { makeStyles } from "@material-ui/core/styles";
import More from "./More";
import ProjectsCarousel from "./ProjectsCarousel";

const useStyles = makeStyles((theme) => ({
  maincontent: {
    paddingTop: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(13),
      paddingRight: theme.spacing(17),
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  noWidthOverflow: {
    maxWidth: "100%",
  },
  frame: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(10),
    }
  },
  text: {
    // paddingTop: theme.spacing(10),
    // paddingBottom: theme.spacing(10),
  },
  halfBackground: {
    background: `linear-gradient(to top, ${theme.palette.secondary.light} 50%, transparent 50%)`, //secondary.light
  },
}));

export default function Home() {
  //Styles
  const classes = useStyles();

  return (
    <Box width={1} className={classes.frame}>
      {/* <Avatar className={classes.large} >
                        <img src={mainPhoto} alt="Yi Yang's profile" className={classes.img}/>
                    </Avatar > */}
      <Container maxWidth="xl" className={classes.maincontent}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="h1">
              Hi! <span>I'm</span> Yi Yang{" "}
            </Typography>
            <Box>
              <Typography variant="h1">
                <span className={classes.halfBackground}>
                  Full-stack Developer
                </span>
              </Typography>
            </Box>
            <Typography variant="subtitle1">
              I produce elegant and performant code at Toronto, Canada.
            </Typography>
            <Box my={3}>
              <More height={40} />
            </Box>
            <Box>
              <ProjectsCarousel />
            </Box>
          </Grid>
          <Grid container item xs={12} md={6} alignItems={"flex-end"}>
            <Grid item xs={12}>
              <Box mx={10} mt={3}>
                <Image src={mainPhoto} alt="Yi Yang's profile" cover={true} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
