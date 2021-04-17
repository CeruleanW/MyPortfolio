import React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
} from "@material-ui/core";
import { PropTypes } from "prop-types";
import defaultImage from "../assets/img/SD-default-image.png";
import { Link } from "react-router-dom";

//Styles
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  card: {
    height: theme.spacing(49),
    // display: "flex",
    // flexDirection: "column",
  },
  media: {
    width: "100%",
    paddingTop: "56.25%",
  },
  title: {
    // flex: 1
  },
  descrip: {
    opacity: 0.8,
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

CustomCard.defaultProps = {
  bg: defaultImage,
};

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  bg: PropTypes.string,
};

export default function CustomCard(props) {
  const classes = useStyles();
  const { title, subtitle, image, id } = props;

  return (
    <>
      <Card elevation={3} className={classes.card}>
        <CardActionArea component={Link} to={`/projects/${id}`}>
          <CardMedia
            className={classes.media}
            image={process.env.PUBLIC_URL + "/img/" + image}
            cover={true}
            title={title}
          />
          <CardContent>
            <Box className={classes.title}>
              <Typography
                gutterBottom
                variant="h5"
                component={"h2"}
                align="center"
              >
                {title}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body2"
                color="textPrimary"
                component="p"
                className={classes.descrip}
                align="center"
              >
                {subtitle}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
        {/* <Collapse /> */}
      </Card>
    </>
  );
}
