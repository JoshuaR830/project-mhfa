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
    }
});

export default theme;