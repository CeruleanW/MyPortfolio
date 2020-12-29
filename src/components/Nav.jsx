import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { IconButton, Typography, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles';


export default function Nav(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
    }));

    const allTabs = props.routes;

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={""}>
                        &#10023;Yi Yang&#10023;
                    </Typography>
                    {/* <Tabs value={false} onChange={handleChange} centered aria-label="navigation tabs">
                        <Tab label="Home" value={allTabs[0]} component={Link} to={allTabs[0]} {...a11yProps(0)} />
                        <Tab label="Projects" value={allTabs[1]} component={Link} to={allTabs[1]} {...a11yProps(1)} />
                        <Tab label="About me" value={allTabs[2]} component={Link} to={allTabs[2]} {...a11yProps(2)} />
                        <Tab label="Contact" value={allTabs[3]} component={Link} to={allTabs[3]} {...a11yProps(3)} />
                    </Tabs> */}
                    {props.children}
                    <IconButton edge="start" className={""} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}