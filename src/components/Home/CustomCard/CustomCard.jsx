import React from "react";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Collapse,
  Box,
  Grid,
} from "@material-ui/core";
import { PropTypes } from "prop-types";
import defaultImage from "./SD-default-image.png";
import WithCenter from "../../WithCenter";

//Styles
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  media: {
    // width: "100%",
    // paddingTop: "56.25%",
    maxHeight: "40%",
    height: "160px",
  },
  container: {
    position: "relative",
  },
  descrip: {
    opacity: 0.8,
  },
  button: {
    marginLeft: theme.spacing(1),
  },
  card: {
    height: theme.spacing(40)
  }
}));

Card.defaultProps = {
  bg: defaultImage,
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  bg: PropTypes.string,
};

const ButtonAtBottom = (props) => {
  const classes = useStyles();

  return (
    <WithCenter>
      <Grid item xs={12}>
        <Button
          variant={"outlined"}
          size="small"
          color="primary"
          className={classes.button} // component={Link}
          // to={`/`}
          onClick={props.onClick}
        >
          See it!
        </Button>
      </Grid>
    </WithCenter>
  );
};

export default function CustomCard(props) {
  const classes = useStyles();
  const { title, subtitle, bg } = props;

  function handleClick() {
    //set isLoading=true
    // updateIsLoading(true);
    return null;
  }

  return (
    <>
      <Card elevation={6} className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={bg}
            cover={true}
            title={title}
          />
          <CardContent>
            <Box>
              <Typography
                gutterBottom
                variant="h5"
                className={classes.title}
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
        <Collapse />
      </Card>
    </>
  );
}
