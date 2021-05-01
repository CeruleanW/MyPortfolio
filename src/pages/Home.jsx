import PropTypes from 'prop-types';
import React from 'react';
import { Typography, Box } from '@material-ui/core';
import Image from 'material-ui-image';
import { makeStyles } from '@material-ui/core/styles';
import SeeMyProject from '../components/More';
import ProjectsCarousel from '../components/ProjectsCarousel';
import DotBox from '../components/DotBox';
import { motion } from 'framer-motion';
import { FULLNAME, JOBTITLE } from '../data/globals';
import styles from '../styles/pages/Home.module.scss';

const mainPhoto = '/img/avatar.png';

const useStyles = makeStyles((theme) => ({
  maincontent: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(13),
      paddingRight: theme.spacing(17),
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  noWidthOverflow: {
    maxWidth: '100%',
  },
  halfBackground: {
    background: `linear-gradient(to top, ${theme.palette.secondary.light} 50%, transparent 50%)`,
  },
}));

export function Header() {
  const classes = useStyles();
  return (
    <>
      <Typography variant='h1' component='h1'>
        Hi! <span>I'm</span> {FULLNAME}
      </Typography>
      <Box width={'fit-content'}>
        <Typography variant='h1'>
          <span className={classes.halfBackground}>{JOBTITLE}</span>
        </Typography>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Typography variant='subtitle1'>
            coding at Toronto, Canada.
          </Typography>
        </motion.div>
      </Box>
    </>
  );
}

//Styles
const variants = {
  animate: { opacity: 1, x: 0 },
  right: { opacity: 0, x: 1000 },
  left: { opacity: 0, x: -1000 },
};

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Header />
        <motion.div
          initial='left'
          animate='animate'
          variants={variants}
          transition={{ duration: 0.8 }}
        >
          <div mt={12} className={styles.leftBottom}>
            <SeeMyProject height={40} />
          </div>
          <Box mt={3}>
            <ProjectsCarousel />
          </Box>
        </motion.div>
      </div>
      <div className={styles.right}>
        <motion.div
          initial='right'
          animate='animate'
          variants={variants}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={mainPhoto}
            alt={`${FULLNAME}'s profile`}
            imageStyle={{ width: '100%', zIndex: '1' }}
            aspectRatio={0.75}
            disableTransition
          />
          <DotBox />
        </motion.div>
      </div>
    </div>
  );
}
