import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { IconButton, Typography, Toolbar, Box } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

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
              &#10023; Y. Yang
            </Typography>
          </Box>
          {props.children}
          <Box style={{ flex: 1 }} />
          <IconButton
            edge="start"
            className={""}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
