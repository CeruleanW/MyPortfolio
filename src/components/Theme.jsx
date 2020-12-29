//Styles
import { ThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { blue, orange } from "@material-ui/core/colors";
const themeInstance = createMuiTheme({
    palette: {
      primary: blue,
      secondary: orange,
    }
});

const useStyles = makeStyles((theme) => ({
    // flexContent: {
    //   flex: "1 0 auto",
    // }
}));

export default function Theme(props) {
    return(
        <ThemeProvider theme={themeInstance}>{props.children}</ThemeProvider>
    );
}