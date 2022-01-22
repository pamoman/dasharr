/*
 * Theme - Dark
 */

import { createTheme } from '@mui/material/styles';

const dark = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "rgb(255, 255, 255)",
        },
        secondary: {
            main: 'rgb(0, 0, 0)',
        },
        background: {
            light: 'rgb(18, 29, 38, 0.5)',
            main: 'rgb(18, 29, 38, 1)',
            dark: '#121212',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    spacing: 4,
    breakpoints: {
        values: {
            xs: 0,
            sm: 500,
            md: 800,
            lg: 1200,
            xl: false
        },
    },
});

/*
 * Perform global overrides
 */
export const globalStyle = {
    html: {
        WebkitFontSmoothing: 'antialiased',
        overflowX: "hidden",
        overflowY: "auto",
    },
    body: {
        margin: 0
    },
    a: {
        boxSizing: "content-box"
    } 
};

export default dark;