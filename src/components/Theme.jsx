//Styles
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
const themeInstance = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#2C2C2C",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#FEFEFE",
    },
    secondary: {
      light: "#DCEAEB",
      main: "#88BBBC",
      dark: "#055158",
      contrastText: "#fff",
    },
    text: {
      primary: "#373737",
      secondary: "#7E7E7E",
      contrastBackground: "#65FFC9",
    },

    // // Used by `getContrastText()` to maximize the contrast between
    // // the background and the text.
    // contrastThreshold: 3,
    // // Used by the functions below to shift a color's luminance by approximately
    // // two indexes within its tonal palette.
    // // E.g., shift from Red 500 to Red 300 or Red 700.
    // tonalOffset: 0.2,
  },
});

themeInstance.typography.h1 = {
  fontSize: "1.9rem",
  [themeInstance.breakpoints.up("md")]: {
    fontSize: "2.8rem",
  },
  lineHeight: 1.567,
  fontFamily: "'Raleway', sans-serif;",
  fontWeight: 700,
};

themeInstance.typography.h2 = {
  fontSize: "1.5rem",
  fontFamily: "'Raleway', sans-serif;",
  [themeInstance.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
  lineHeight: 1.567,
};

themeInstance.typography.h5 = {
  fontSize: "1.5rem",
  fontFamily: "Muli, sans-serif",
};

themeInstance.typography.body1 = {
  fontFamily: "Montserrat, sans-serif",
  lineHeight: "28px",
  fontSize: "16px",
  fontWeight: 400,
  opacity: "0.9",
};

themeInstance.typography.subtitle1 = {
  fontFamily: "Montserrat, sans-serif",
};

const useStyles = makeStyles((theme) => ({
  // flexContent: {
  //   flex: "1 0 auto",
  // }
}));

export default function Theme(props) {
  return <ThemeProvider theme={themeInstance}>{props.children}</ThemeProvider>;
}
