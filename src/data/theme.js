import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors : {
        grey : "#F0F0F0",
        darkgrey : "grey",
        light : "white"
    },
    largeviewport : {
        width : "80%",
        padding : "50px",
        margin : "5%"
    }
};

const Theme = ({ children }) =>{
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
};

export default Theme;