import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  Typography,
  Paper,
  Box,
  Button,
  Collapse,
  Grid,
} from "@material-ui/core";
import { styled, createMuiTheme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    maxWidth: "90vw",
    height: theme.spacing(30),
    "&:hover": {
      opacity: 0,
    },
  },
  up: {
    top: "24%",
    position: "absolute",
  },
  down: {
    bottom: "24%",
    position: "absolute",
  },
  title: {
    fontFamily: "'Raleway', sans-serif"
  }
}));

// Single project thumbnail
export default function ProjectThumbnail(props) {
  const { image, title, tech } = props;
  const [isOpen, setIsOpen] = useState();
  const imagePath = process.env.PUBLIC_URL + "/img/" + image;

  const classes = useStyles();
  //set background image
  const styles = {
    paperContainer: {
      backgroundImage: `url(${imagePath})`,
      backgroundRepeat: "no-repeat" /* Do not repeat the image */,
      backgroundSize:
        "cover" /* Resize the background image to cover the entire container */,
    },
  };

  const handleClick = () => {};

  return (
    <>
      <Box position={"absolute"} width={"100%"}>
        <Paper
          style={styles.paperContainer}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className={classes.paperContainer}
        />
        <Collapse in={isOpen}>
          <Box className={classes.up}>
            <Typography  variant={'h6'} component={'p'} className={classes.title}>{title}</Typography>
            <Typography color={'secondary'}>{tech}</Typography>
          </Box>
        </Collapse>
        <Collapse in={isOpen}>
          <Button onClick={handleClick} className={classes.down}>
            LEARN MORE
          </Button>
        </Collapse>
      </Box>
    </>
  );
}
