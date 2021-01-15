import React from 'react';
import { Typography, Box, Container, Grid } from "@material-ui/core";
import Description from './../Home/Description';

//TODO:
// the whole page

export default function ProjectDetailPage(props) {
  const {name, description, metadata}
  
  return (
    <>
      <Box>
        <Title></Title>
        <Description> </Description>
        <MetaData>
        <ListHeader label="Type">
          <ListItem>Personal Project</ListItem>
        </ListHeader>
        <ListHeader label="Techs">
          <ListItem>React.js</ListItem>
          <ListItem>Material UI</ListItem>
          <ListItem>RESTful API</ListItem>
        </ListHeader>
        </MetaData>
      </Box>
    </>
  )
}