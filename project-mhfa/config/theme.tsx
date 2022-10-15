import { createTheme } from '@mui/material/styles';
import { cyan, green, red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: cyan.A400
        },

        secondary: {
            main: green.A400
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