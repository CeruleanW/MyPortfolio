import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FULLNAME } from "../../data/globals";

const useStyles = makeStyles({
  footerLink: {
    "&:visited": {
      color: "blueviolet",
    },
  },
});

export default function FooterContent() {
  const classes = useStyles();
  return (
      <Box className={classes.footer} justifyContent={"center"}>
        <Typography align='center' >
          Copyright &copy; 2020 Developed with ❤️ by {' '}
          <a className={classes.footerLink}
            href='https://github.com/CeruleanW'
          >
           {FULLNAME}
          </a>
        </Typography>
      </Box>
  );
}
