// Work Philosophy: A brief description of your beliefs about yourself and the industry.

// include a contact form and your social media channels.
// about this site
import React from "react";
import profilePhoto from "./profilePhoto.JPG";
import { Typography, Box, Grid, Container } from "@material-ui/core";
import Description from "./../Home/Description";
import Image from "material-ui-image";
import { makeStyles } from "@material-ui/core/styles";
import MyStory from "./MyStory";
import MySkills from "./MySkills";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.up("md")]: {},
  },
}));

const Title = (props) => {
  return <Typography variant={"h1"}>{props.children}</Typography>;
};

const Section = (props) => {
  return <Box my={13}>{props.children}</Box>;
};

export default function AboutMe() {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Grid
          container
          justify={"center"}
          className={classes.root}
          alignItems={"center"}
          spacing={8}
        >
          <Grid item lg={5}>
            <Box display={"flex"}>
              <Box width={50} bgcolor={"#5f9ea085"} mr={3}> </Box>
              <Box flexGrow={1}>
                <Description>HEY THERE!</Description>
                <Title>I'm Yi Yang</Title>
                <Box mt={2}>
                  <Description>
                    Let me Yi-xpress myself a little. Please have a seat. I'll
                    try to make it not so boring.
                  </Description>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={7}>
            <Box maxWidth={600}>
              <Image src={profilePhoto} alt="Profile of Yi Yang" cover />
            </Box>
          </Grid>
        </Grid>
        <Section>
          <MyStory />
        </Section>
        <Section>
          <MySkills />
        </Section>
      </Container>
    </>
  );
}
