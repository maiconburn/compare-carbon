import { createMuiTheme } from "@material-ui/core/";
import red from "@material-ui/core/colors/red";
import "fontsource-roboto";

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#333",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#E1E7E4",
    },
  },
});

const {
  breakpoints,
  typography: { pxToRem },
} = defaultTheme;

const theme = {
  ...defaultTheme,
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "5rem",
        [breakpoints.down("xs")]: {
          fontSize: "3rem",
        },
      },
    },
  },
};

export default theme;
