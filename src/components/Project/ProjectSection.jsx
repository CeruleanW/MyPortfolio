import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  Typography,
  Paper,
  Box,
  Button,
  Collapse,
  Grid,
  Chip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./ProjectSection.css";
// Single project section
//TODO:
// button links

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    // maxWidth: "90vw",
  },
  paperContainer: {
    // maxWidth: "90vw",
    height: theme.spacing(50),
    width: theme.spacing(80),
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      height: theme.spacing(20),
      width: theme.spacing(32),
    },
  },
  title: {
    fontFamily: "'Raleway', sans-serif",
  },
  tech: {
    width: "auto",
    borderRadius: "6pt",
    // marginRight: "1vw",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.text.contrastBackground,
  },
  techContainer: {
    maxWidth: 500,
    display: "flex",
    marginTop: theme.spacing(4),
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    }
  }
}));


const ProjectCard = (props) => {
  const classes = useStyles();
  //set background image
  const styles = {
    bgImage: {
      backgroundImage: `url(${props.imagePath})`,
      backgroundRepeat: "no-repeat" /* Do not repeat the image */,
      backgroundSize:
        "cover" /* Resize the background image to cover the entire container */,
    },
  };

  return (
    <Box>
      <Paper style={styles.bgImage} className={classes.paperContainer} />
      <Collapse in={props.isHover}>
        <Box
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          mt={1}
        >
          <Button
            onClick={props.handleClick}
            variant="contained"
            color="primary"
          >
            View
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
};

const ProjectText = (props) => {
  const classes = useStyles();
  const {isRightNarrow, isHover} = props;

  return (
    <>
      <Collapse in={isHover}>
        <Box maxWidth={500} mt={4}>
          <Typography variant={"h5"} component={"p"} className={classes.title} align={isRightNarrow ? "left" : "right"}>
            {props.title}
          </Typography>
          <Typography align={isRightNarrow ? "left" : "right"}>{props.subtitle}</Typography>
        </Box>
      </Collapse>
      <Collapse in={isHover}>
        <Box className={classes.techContainer} justifyContent={isRightNarrow ? "flex-start" : "flex-end"}>
          {props.techs.map((tech, index) => (
            <Chip key={"tech-" + index} label={tech} className={classes.tech} />
          ))}
        </Box>
      </Collapse>
    </>
  );
};

export default function ProjectSection(props) {
  const { image, title, techs, isRightNarrow, subtitle } = props;
  const [isHover, setIsHover] = useState();
  const imagePath = process.env.PUBLIC_URL + "/img/" + image;

  const classes = useStyles();

  const handleClick = () => {};

  return (
    <>
      <section>
        <Grid
          container
          spacing={2}
          justify={"center"}
          alignItems={"center"}
          className={classes.gridContainer}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {isRightNarrow ? (
            <Grid item lg={6} xs={11}>
              <ProjectCard
                isHover={isHover}
                handleClick={handleClick}
                imagePath={imagePath}
              />
            </Grid>
          ) : (
            <Grid item lg={4} xs={11}>
              <ProjectText
                title={title}
                techs={techs}
                subtitle={subtitle}
                isHover={isHover}
                isRightNarrow={isRightNarrow}
              />
            </Grid>
          )}

          {isRightNarrow ? (
            <Grid item lg={4} xs={11}>
              <ProjectText
                title={title}
                techs={techs}
                subtitle={subtitle}
                isHover={isHover}
                isRightNarrow={isRightNarrow}
              />
            </Grid>
          ) : (
            <Grid item lg={6} xs={11}>
              <ProjectCard
                isHover={isHover}
                handleClick={handleClick}
                imagePath={imagePath}
              />
            </Grid>
          )}
        </Grid>
      </section>
    </>
  );
}
