import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Typography, Paper, Box, Button, Grid, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./ProjectSection.css";
import { motion } from "framer-motion";
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
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.text.contrastBackground,
  },
  techContainer: {
    display: "flex",
    marginTop: theme.spacing(4),
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const scaleAni = { whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 } };

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
    <motion.div {...scaleAni}>
      <Box>
        <Paper style={styles.bgImage} className={classes.paperContainer} />
      </Box>
    </motion.div>
  );
};

const ProjectText = (props) => {
  const classes = useStyles();
  const { isRightNarrow, onAppear, title, subtitle } = props;

  return (
    <Box maxWidth={500}>
      <motion.div {...scaleAni}>
      <Box mt={4}>
        <Typography
          variant={"h5"}
          component={"p"}
          className={classes.title}
          align={isRightNarrow ? "left" : "right"}
        >
          {title}
        </Typography>
        <Typography align={isRightNarrow ? "left" : "right"}>
          {subtitle}
        </Typography>
      </Box>
      <Box
        className={classes.techContainer}
        justifyContent={isRightNarrow ? "flex-start" : "flex-end"}
      >
        {props.techs.map((tech, index) => (
          <Chip key={"tech-" + index} label={tech} className={classes.tech} />
        ))}
      </Box>
      </motion.div>
      <Box
        display="flex"
        justifyContent={isRightNarrow ? "flex-start" : "flex-end"}
        alignItems={"center"}
        mt={8}
      >
        <motion.div {...scaleAni}>
          <Button
            onClick={props.handleClick}
            variant="contained"
            color="primary"
            size="large"
          >
            Check it out!
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default function ProjectSection(props) {
  const { image, title, techs, isRightNarrow, subtitle } = props;
  const [isHover, setIsHover] = useState(false);
  // const [isLoaded, setIsLoaded] = useState(false);
  const imagePath = process.env.PUBLIC_URL + "/img/" + image;

  const classes = useStyles();
  // useEffect(() => {
  //   // componentWillUnmount
  //   return () => {
  //     setIsLoaded(true);
  //   }
  // });

  const handleClick = () => {};

  return (
    <>
      <section>
        <Grid
          container
          justify={"center"}
          alignItems={"center"}
          className={classes.gridContainer}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {isRightNarrow ? (
            <Grid item lg={6} xs={11}>
              <ProjectCard
                onAppear={true}
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
                onAppear={true}
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
                onAppear={true}
                isRightNarrow={isRightNarrow}
              />
            </Grid>
          ) : (
            <Grid item lg={6} xs={11}>
              <ProjectCard
                onAppear={true}
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
