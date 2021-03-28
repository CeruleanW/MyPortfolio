// Work Philosophy: A brief description of your beliefs about yourself and the industry.

// include a contact form and your social media channels.
import React from 'react';
import profilePhoto from '../../assets/img/JJH00191.JPG';
import {
  Typography,
  Box,
  Grid,
  Container,
  useMediaQuery,
} from '@material-ui/core';
import Description from './../Home/Description';
import Image from 'material-ui-image';
import { makeStyles } from '@material-ui/core/styles';
import MyStory from './MyStory';
import MySkills from './MySkills';
import { useTheme } from '@material-ui/styles';
import { motion } from 'framer-motion';
import { CONSTANTS } from '../../data/globals';
const { FULLNAME } = CONSTANTS;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    [theme.breakpoints.up('md')]: {},
  },
}));

const Title = (props) => {
  return <Typography variant={'h1'}>{props.children}</Typography>;
};

const Section = (props) => {
  return <Box my={8}>{props.children}</Box>;
};

//TODO: Add resume download
export default function AboutMe() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  });
  const variants = {
    animate: { opacity: 1, x: 0 },
    right: { opacity: 0, x: 1000 },
    left: { opacity: 0, x: -1000 },
  };

  return (
    <>
      <Container>
        <Grid
          container
          justify={'center'}
          className={classes.root}
          alignItems={'center'}
          spacing={isMobile ? 2 : 8}
        >
          <Grid item lg={5}>
            <motion.div
              initial='left'
              animate='animate'
              variants={variants}
              transition={{ duration: 1 }}
            >
              <Box display={'flex'} mb={3}>
                <Box width={50} bgcolor={'#5f9ea085'} mr={3}></Box>
                <Box flexGrow={1}>
                  <Description>HEY THERE!</Description>
                  <Title>I'm {FULLNAME}</Title>
                  <Box mt={2}>
                    <Description>
                      Let me express myself a little. Please have a seat. I'll
                      try to make it not so boring.
                    </Description>
                  </Box>
                </Box>
              </Box>
              <Box maxWidth={600}>
                <Image
                  src={profilePhoto}
                  alt={`Profile of ${FULLNAME}`}
                  cover
                  disableTransition
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid container item lg={7}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Box mt={isMobile ? 0 : 30}>
                <MyStory />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
        <Section>
          <MySkills />
        </Section>
      </Container>
    </>
  );
}
