import React, { useState } from "react";
// import Slide from "react-swipeable-views";
import { Box, Container, Grid } from "@material-ui/core";
// import brokenCafe from "../../assets/img/logo512.png";
// import churchIcon from "../../assets/img/church-icon.png";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { makeStyles } from "@material-ui/core/styles";
import CustomCard from "./CustomCard/CustomCard";
import { red, blue, green } from "@material-ui/core/colors";
import cewImage from "../../assets/img/cew.png";
import gpseImage from "../../assets/img/gpse.png";
import bcImage from "../../assets/img/bc.png";

const useStyles = makeStyles((theme) => ({
  provider: {
    // border: "3px solid red",
  },
}));

//TODO:
// get cards from projects list

function Media(props) {
  const { onlyImg } = props;

  return (
    <>
      <Box maxWidth={onlyImg ? "30%" : "100%"}>{props.children}</Box>
    </>
  );
}

export default function ProjectsCarousel(props) {
  const classes = useStyles();
  const projectList = [
    {
      title: "Landing Page - Broken Dream Café",
      subtitle:
        "A responsive design landing page for a non-existing restaurant, using React.js, Semantic UI React, and CSS Module",
      bg: bcImage,
    },
    {
      title: "Google Photos Search Enhancer",
      subtitle:
        "helps users to match words in the descriptions and filenames in Google Photos Library in any language, using React.js and Material UI, RESTful API of Google. Photo data are stored in IndexedDB",
      bg: gpseImage,
    },
    {
      title: "Church Education Website",
      subtitle:
        "A website developed for the sunday school of Zion Alliance Church",
      bg: cewImage,
    }
  ];

  return (
    <>
      <Box maxWidth={"50%"} mx={"auto"}>
        <CarouselProvider
          naturalSlideWidth={80}
          naturalSlideHeight={70}
          totalSlides={projectList.length}
          className={classes.provider}
          infinite={true}
        >
          <Slider>
            {projectList.map( (project, index) => (<Slide index={index}> <CustomCard {...project} /> </Slide>))}
          </Slider>
          {/* <Container>
            <Grid container justify="center" spacing={1}>
              <Grid item>
                <ButtonBack>Back</ButtonBack>
              </Grid>
              <Grid item>
                <ButtonNext>Next</ButtonNext>
              </Grid>
            </Grid>
          </Container> */}
        </CarouselProvider>
      </Box>
    </>
  );
}
