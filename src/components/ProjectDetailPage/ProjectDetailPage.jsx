import React from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Grid,
  Link,
  Container,
  CardMedia,
} from "@material-ui/core";
import Description from "../Home/Description";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import data from "../../data/projects.json";
import { makeStyles } from "@material-ui/core/styles";
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles((theme) => ({
  listItem: {
    // overflow: "hidden",
    // transform: "skew(-10deg)",
    // WebkitBackfaceVisibility: "hidden",
    // backfaceVisibility: "hidden",
    // transition: "all 0.2s ease",
    // fontFamily: "sans-serif",
    // background: "#444",
    // margin: `${theme.spacing(1.5)}px 0`,
  },
  linkText: {
    color: blue[500],
    fontWeight: 900
    // textShadow: "0 1px 0 rgba(0, 0, 0, 0.4)",
    // fontSize: theme.spacing(1.7)
  },
  normalText: {},
}));

//TODO:
// pics for projects
const { projects } = data;

function Title(props) {
  return (
    <>
      <Typography variant="h1">{props.children}</Typography>
    </>
  );
}

export function MetaData(props) {
  return (
    <Grid container justify={"space-between"}>
      {props.children}
    </Grid>
  );
}

export function MetaDataList(props) {
  const { label, items, item, isLink, linktext } = props;
  const classes = useStyles();
  const listSymbol = "⊳";

  const MyListItem = ({ text }) => {
    return (
      <ListItem className={classes.listItem}>
        <Typography
          className={classes.normalText}
        >{`${listSymbol} ${text}`}</Typography>
      </ListItem>
    );
  };

  const renderItems = items
    ? items.map((item, index) => (
        <MyListItem text={item} key={"list-item-" + index} />
      ))
    : null;

  let renderItem;
  if (isLink) {
    renderItem = item ? (
      <ListItem className={classes.listItem}>
        <Typography>
          <Link href={item} className={classes.linkText}>{`${listSymbol} ${linktext}`}</Link>
        </Typography>
      </ListItem>
    ) : null;
  } else {
    renderItem = item ? <MyListItem text={item} /> : null;
  }

  return (
    <Grid container item lg={3}>
      <Box>
        <List>
          <ListSubheader disableGutters disableSticky>
            {label}
          </ListSubheader>
          {renderItems}
          {renderItem}
        </List>
      </Box>
      {props.children}
    </Grid>
  );
}

function getProject(targetId) {
  const result = projects.find(({ id }) => id === targetId);
  return result;
}

function Heading(props) {
  return (
    <Box mt={10}>
      <Typography variant={"h2"}>{props.children}</Typography>
    </Box>
  );
}

export default function ProjectDetailPage(props) {
  const { id } = useParams(); //pure item id
  //use the project id to find project data
  const projectData = getProject(id);

  const {
    title,
    content,
    live,
    type,
    techs,
    repo,
    illustrations,
  } = projectData;

  let illustrationPaths = [];
  if (illustrations) {
    illustrationPaths = illustrations.map(
      (imgName) => process.env.PUBLIC_URL + "/img/illustrations/" + imgName
    ); // local path
  }

  // render the img by index
  const renderIllustration = (index) => {
    try {
      if (illustrationPaths[index]) {
        return (
          <Box maxWidth={1500} my={6}>
            {/* <Image
                src={illustrationPaths[index]}
                alt={"illustration"}
                cover
                imageStyle={{ width: "auto", height:"auto", maxHeight:"500px", maxWidth: "800px" }}
              /> */}
            <img
              src={illustrationPaths[index]}
              alt={"illustration"}
              style={{ width: " 100%", height: "auto" }}
            />
          </Box>
        );
      }
    } catch {
      return null;
    }
  };

  return (
    <>
      <Container>
        <Box mt={14}>
          <Title>{title}</Title>
          <Box mt={6} maxWidth={800}>
            <Description>{content.introduction}</Description>
          </Box>
          <Box mt={4} maxWidth={870}>
            <MetaData>
              <MetaDataList label={"Type"} item={type} />
              <MetaDataList label={"Techs"} items={techs} />
              <MetaDataList
                label={"Source Code"}
                item={repo}
                isLink={true}
                linktext={"Repo"}
              />
              <MetaDataList
                label={"Demo"}
                item={live}
                isLink={true}
                linktext={"Visit Site"}
              />
            </MetaData>
          </Box>
        </Box>
        {renderIllustration(0)}
        <Heading>Project Goal</Heading>
        <Box mt={6} maxWidth={1024}>
          <Description>{content.goal}</Description>
        </Box>
        {content.spotlight ? (
          <Box mt={6} maxWidth={1024}>
            <Heading>Spotlight</Heading>
            <Description>{content.spotlight}</Description>
          </Box>
        ) : null}
        <Box mt={7}>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={6}>
              {renderIllustration(1)}
            </Grid>
            <Grid item xs={12} lg={6}>
              <Heading>Problems</Heading>
              <Box mt={6} maxWidth={650}>
                {content.problem.map((p, index) => (
                  <Description key={"para-" + index}>{p}</Description>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mx={"auto"} mt={10} mb={10} maxWidth={1024}>
          {/* <Heading>Lessons Learned</Heading> */}
          <Typography variant={"h2"} align={"center"}>
            Lessons Learned
          </Typography>
          <Box mt={6}>
            {content.lesson.map((p, index) => (
              <Description key={"para-" + index} align={"center"}>
                {p}
              </Description>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}
