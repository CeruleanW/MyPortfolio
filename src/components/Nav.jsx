import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { IconButton, Typography, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export class Nav extends Component {
    render() {
        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={""}>
                            &#10023;Yi Yang&#10023;
                        </Typography>
                        <IconButton edge="start" className={""} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </>
        )
    }
}

export default Nav
