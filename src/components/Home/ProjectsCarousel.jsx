import React from "react";
import { Box, Grid } from "@material-ui/core";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { makeStyles } from "@material-ui/core/styles";
import CustomCard from "./CustomCard/CustomCard";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { carouselProjects } from "../../data/projects.json";
import "./ProjectsCarousel.css";

const useStyles = makeStyles((theme) => ({
  slider: {
    borderRadius: theme.spacing(2),
  },
  button: {
    borderRadius: "50%",
    borderColor: "#7e7e7e4f",
    borderWidth: "1px",
    width: theme.spacing(5),
    height: theme.spacing(5),
    "&:focus": {
      outlineColor: "#7e7e7e4f",
    },
  },
}));


export default function ProjectsCarousel(props) {
  const classes = useStyles();
  const projectList = carouselProjects;

  return (
    <>
      <Box mx={"auto"} maxWidth={540}>
        <CarouselProvider
          naturalSlideWidth={80}
          naturalSlideHeight={70}
          totalSlides={projectList.length}
          className={classes.provider}
          infinite={true}
        >
          <Grid container alignItems={"center"} spacing={1} justify={"center"}>
            <Grid container item xs={1} justify={"center"}>
              <ButtonBack className={classes.button}>
                <ArrowBackIcon />
              </ButtonBack>
            </Grid>
            <Grid item xs={10}>
              <Slider className={classes.slider}>
                {projectList.map((project, index) => (
                  <Slide key={"slide-" + index} index={index}>
                    <CustomCard key={"card-" + index} {...project} image={project.image} />
                  </Slide>
                ))}
              </Slider>
            </Grid>

            <Grid container item xs={1} justify={"center"}>
              <ButtonNext className={classes.button}>
                <ArrowForwardIcon />
              </ButtonNext>
            </Grid>
            <Grid item xs={1} />
            <Grid container item xs={10} justify={"center"}>
              {projectList.map((project, index) => (
                <Dot slide={index} key={"dot-" + index} />
              ))}
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </CarouselProvider>
      </Box>
    </>
  );
}
