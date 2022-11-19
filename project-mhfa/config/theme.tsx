import { createTheme } from '@mui/material/styles';
import { common, cyan, green, red, grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: cyan.A400,
            50: cyan[50],
            100: cyan.A100,
            200: cyan.A200,
            300: cyan[300],
            400: cyan.A400,
            500: cyan[500],
            600: cyan[600],
            700: cyan.A700,
            800: cyan[800],
            900: cyan[900],
            contrastText: common.white,
        },

        secondary: {
            main: green.A400,
            100: green.A100,
            200: green.A200,
            300: green[300],
            400: green.A400,
            500: green[500],
            600: green[600],
            700: green.A700,
            800: green[800],
            900: green[900],
            contrastText: grey[300]
        },

        grey: {
            100: grey[100],
            200: grey[200],
            300: grey[300],
            400: grey[400],
            500: grey[500],
            600: grey[600],
            700: grey[700],
            800: grey[800],
            900: grey[900]
        },

        error: {
            main: red.A400
        }
    },
    typography: {
        h1: {
            fontSize: 36,
            fontWeight: 400
        }
    }
});

export default theme;