import React from "react";
import FooterContent from "./FooterContent";
import { AppBar, Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  footer: {
    bottom: "0",
    minHeight: "56px", // this height should be the same with the value in <div className="App"> tag
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="primary" className={classes.footer} component={"footer"}>
      <Box p={2}>
        <FooterContent />
      </Box>
    </AppBar>
  );
}
