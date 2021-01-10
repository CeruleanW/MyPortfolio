import PropTypes from "prop-types";
import React, { useState } from "react";
import { Typography, Box, Container, Avatar, Grid } from "@material-ui/core";
import mainPhoto from "./img/profile.png";
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

  //Content
  const para1 =
    "Maybe we can make the world a little bit better. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit aliquam etiam";
  const para2 =
    "Consectetur adipiscing elit pellentesque habitant. Lectus mauris ultrices eros in cursus turpis massa. Eget nullam non nisi est sit amet facilisis magna. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Morbi non arcu risus quis varius. For the past 2 years, I studied Information Technology at York University.";
  const carouselItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
            <Description text={para1} />
            <Description text={para2} />
            <Box my={3}>
              <More height={40} />
            </Box>
            <Box>
              <ProjectsCarousel />
            </Box>
          </Grid>
          <Grid container item xs={12} md={6} alignItems={"flex-end"}>
            {/* <Box height={30} bgcolor="secondary.light" mb={3}/> */}
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
