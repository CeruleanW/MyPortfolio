import React from "react";
import Heading from "./Heading";
import {
  Typography,
  Box,
  List,
  ListSubheader,
  ListItem,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: "1rem",
    fontFamily: "Muli,sans-serif",
    color: theme.palette.secondary.dark,
  },
}));

const SkillSet = (props) => {
  const { title } = props;
  const classes = useStyles();

  return (
    <Grid item lg={3}>
      <List
        subheader={
          <ListSubheader className={classes.header} disableGutters>
            {title}
          </ListSubheader>
        }
      >
        {props.children}
      </List>
    </Grid>
  );
};

const SimpleSkill = (props) => {
  return (
    <ListItem>
      <Typography><span style={{ color: "cadetblue", marginRight: "6px" }}>●</span>
      {props.children}</Typography>
    </ListItem>
  );
};
const ExpandableSkill = (props) => {
  return (
    <SimpleSkill>
      {props.children}
    </SimpleSkill>
  );
};

export default function MySkills() {
  return (
    <>
      <Heading>My Skills</Heading>
      <Grid container justify={"space-between"}>
        <SkillSet title={"Coding Language"}>
          <ExpandableSkill>Java</ExpandableSkill>
          <ExpandableSkill>JavaScript</ExpandableSkill>
          <SimpleSkill>HTML, CSS</SimpleSkill>
          <SimpleSkill>Python</SimpleSkill>
        </SkillSet>
        <SkillSet title={"Frameworks & Libs"}>
          <ExpandableSkill>React.js, React Router</ExpandableSkill>
          <ExpandableSkill>Material UI</ExpandableSkill>
          <SimpleSkill>Jest, JUnit</SimpleSkill>
        </SkillSet>
        <SkillSet title={"Methods & Tools"}>
          <ExpandableSkill>Webpack, NPM</ExpandableSkill>
          <SimpleSkill>MatLab, R</SimpleSkill>
          <SimpleSkill>Test-Driven Development</SimpleSkill>
        </SkillSet>
        <SkillSet title={"Additional"}>
          <SimpleSkill>UML</SimpleSkill>
          <SimpleSkill>SAP</SimpleSkill>
          <SimpleSkill>Bizagi BPMN Modeler</SimpleSkill>
        </SkillSet>
      </Grid>
    </>
  );
}
