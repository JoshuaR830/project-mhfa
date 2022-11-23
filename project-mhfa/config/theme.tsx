import { createTheme } from '@mui/material/styles';
import { common, cyan, green, red, grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4253d7',
            900: '#000546',
            800: '#000b63',
            700: '#00179c',
            600: '#2033bb',
            500: '#3e4fd3',
            400: '#5969ed',
            300: '#7786ff',
            200: '#9aa4ff',
            100: '#bcc2ff',
            50: '#dfe0ff',
            contrastText: common.white,
        },

        secondary: {
            main: '#5b5d72',
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