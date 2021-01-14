// include a contact form and your social media channels.
import React from "react";
import {
  Typography,
  Paper,
  Box,
  Button,
  Grid,
  TextField,
  useMediaQuery,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Share from "./Share";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => {
  const py = theme.spacing(10);
  return {
    textArea: {
      // maxWidth: "90vw",
      width: "100%",
      fontSize: theme.spacing(2.1),
    },
    submit: {
      borderRadius: "0",
      marginTop: theme.spacing(1)
    },
    root: {
      padding: `${py}px ${theme.spacing(8)}px`,
      [theme.breakpoints.up("md")]: {
        padding: `${py}px ${theme.spacing(20)}px`,
      },
      [theme.breakpoints.up("lg")]: {
        padding: `${py}px ${theme.spacing(30)}px`,
      },
    },
  };
});

const SimpleTextField = (props) => {
  const { label } = props;
  return (
    <TextField
      label={label}
      variant="filled"
      margin="normal"
      required
      fullWidth
      color={"secondary"}
    />
  );
};

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"), {
    defaultMatches: true,
  });

  return (
    <Box maxWidth={1280} className={classes.root}>
      <Typography variant={"h2"} component={"p"}>
        Get in touch?
      </Typography>
      <Typography variant={"h2"} component={"p"}>
        Drop me a line!
      </Typography>
      <Box mt={1}>
        <Typography>
          Are you looking for a developer, or just want to talk? Please feel to
          contact me. free.
        </Typography>
      </Box>
      <Box maxWidth={850} mt={4}>
        <form action="#">
          <Grid container justify="center">
            <Grid container item spacing={isMobile ? 0 : 4}>
              <Grid item xs={12} sm={6}>
                <SimpleTextField label="Name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SimpleTextField label="Email" />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={"Message"}
                variant="filled"
                margin="normal"
                required
                fullWidth
                color={"secondary"}
                multiline={true}
                rows={5}
              />
            </Grid>
          </Grid>
          <Button
            className={classes.submit}
            variant="contained"
            color="primary"
            size="large"
            endIcon={""}
            href={""}
            target="_blank"
            rel="noopener"
          >
            Submit
          </Button>
        </form>
      </Box>
      <Box mt={18} width={120}>
        {/* <Typography>
          Email: yyang.techie#gmail.com {"(Please replace # with @)"}
        </Typography> */}
        <Share text={"test"} />
      </Box>
    </Box>
  );
}

{
  /* <TextareaAutosize
rowsMin={10}
aria-label="message input"
placeholder="Please enter your message here"
className={classes.textArea}
label={"Message"}
/> */
}
