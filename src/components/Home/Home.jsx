import PropTypes from "prop-types";
import React, { useState } from "react";
import { Typography, Box, Container, Grid } from "@material-ui/core";
import mainPhoto from "../../assets/img/avatar4.png";
import Image from "material-ui-image";
// import Description from "./Description";
import { makeStyles } from "@material-ui/core/styles";
import More from "./More";
import ProjectsCarousel from "./ProjectsCarousel";
import DotBox from "./DotBox";
import { motion } from "framer-motion";

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
    },
  },
  halfBackground: {
    background: `linear-gradient(to top, ${theme.palette.secondary.light} 50%, transparent 50%)`,
  },
}));

export default function Home() {
  //Styles
  const classes = useStyles();
  const variants = {
    animate: { opacity: 1, x: 0 },
    right: { opacity: 0, x: 1000 },
    left: { opacity: 0, x: -1000 },
  };

  return (
    <Box width={1} className={classes.frame}>
      <Container maxWidth="xl" className={classes.maincontent}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="h1">
              Hi! <span>I'm</span> Yi Yang{" "}
            </Typography>
            <Box>
              <Typography variant="h1">
                <span className={classes.halfBackground}>
                  Full-stack Web Developer
                </span>
              </Typography>
            </Box>
            <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{ duration: 1, delay: 1 }}>
              <Typography variant="subtitle1">
                I produce elegant and performant code at Toronto, Canada.
              </Typography>
            </motion.div>
            <motion.div
              initial="left"
              animate="animate"
              variants={variants}
              transition={{ duration: 1 }}
            >
              <Box mt={14}>
                <More height={40} />
              </Box>
              <Box mt={3}>
                <ProjectsCarousel />
              </Box>
            </motion.div>
          </Grid>
          {/* <Grid container item xs={12} md={6} alignItems={"flex-end"}> */}
          <Grid item xs={12} md={6}>
            <Box mx={10} mt={3} maxWidth={500} maxHeight={800}>
              <motion.div
                initial="right"
                animate="animate"
                variants={variants}
                transition={{ duration: 1 }}
              >
                <Image
                  src={mainPhoto}
                  alt="Yi Yang's profile"
                  imageStyle={{ width: "100%", zIndex: "10" }}
                  aspectRatio={0.75}
                  disableTransition
                />
                <DotBox />
              </motion.div>
            </Box>
          </Grid>
          {/* </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
}
