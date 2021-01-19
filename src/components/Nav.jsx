import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Typography, Toolbar, Box, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import SimpleMenu from './SimpleMenu';

const navTitleFont = "'Exo', sans-serif";

export default function Nav(props) {
  const useStyles = makeStyles((theme) => ({
    navTitlePadding: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(6),
    },
    navTitleFont: {
      fontFamily: navTitleFont,
      fontSize: theme.spacing(3),
    },
    noDecorationForLink: {
        textDecoration: "none",
        "&:visited": {
            textDecoration: "none",
            color: theme.palette.primary.contrastText,
        }
    }
  }));

  const allTabs = props.routes;
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar disableGutters>
          <Box component={Link} to={allTabs[0]} className={classes.noDecorationForLink}>
            <Typography
              className={`${classes.navTitlePadding} ${classes.navTitleFont}`}
              noWrap
            >
              &#10023; Y.Yang
            </Typography>
          </Box>
          <Hidden smDown>{props.children}</Hidden>
          <Box style={{ flex: 1 }} />
          <Hidden mdUp>
            <SimpleMenu routes={props.routes} pageTitles={props.pageTitles}/>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  );
}
