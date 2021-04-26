import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SVGLine from './SVGLine';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function SeeMyProject(props) {
  //Styles

  const useStyles = makeStyles((theme) => ({
    simple: {
      height: props.height + 'px',
      lineHeight: props.height + 'px',
      display: 'inline-block',
    },
    text: {
      textTransform: 'uppercase',
    },
  }));
  const classes = useStyles();

  return (
    <div className='flex flex-nowrap'>
      <ExpandMoreIcon
        className={classes.simple}
        style={{ marginLeft: '-6px' }}
      />
      <Typography noWrap className={`${classes.simple} ${classes.text}`}>
        See My Projects{' '}
      </Typography>
      <SVGLine height={props.height} />
    </div>
  );
}
