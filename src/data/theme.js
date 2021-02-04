import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors : {
        grey : "#f5f5f5",
        darkgrey : "#5f737d",
        light : "white",
        bodyColor : "#5f737e"
    },
    largeviewport : {
        width : "80%",
        padding : "50px",
        margin : "5%",
        bigmargin : "10%",
        megamargin : "15%"
    }
};

const Theme = ({ children }) =>{
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
};

export default Theme;