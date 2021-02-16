import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors : {
        grey : "#f5f5f5",
        light : "#fff",
        meCademyGrey : "#5f737d", // dark grey used in divs with white text
        meCademyTextGrey : "#5f737e", // dark grey used in text against white or light background
        meCademyLightGrey : "#f7f7f7", // used as a very light grey color
        meCademyMediumGrey : "#f5f5f5",  // used as background in some divs with meCademyTextGrey text (e.g. testimonial)
        meCademyTeal : "#3adcd1",
        meCademyLightTeal : "#e6fbf9",
        meCademySalmon : "#e95160"
    },
    largeViewport : {
        size: "1000px", // to be used as min-width in media queries
        padding : "50px", // what is this?
        margin : "2.75%",  // gutter inbetween group of components (e.g. text sections vs accordion)
        
    },
    mediumViewport : {
        size : "768px", // min max it if needed with large and small value in media queries
        padding : "30px",
        margin : "30px",
    },
    smallViewport : {
        size : "767px", // to be used as max-width in media queries
        padding : "30px",
        margin : "30px",
    },
    mainContentWidth : "80%", // all viewports have the same width in the outermost div that holds everything
    mainContentMaxWidth : "1080px",
    inbetweenPadding : "20px", // used as padding bottom between components
    inbetweenTextPadding : "20px" // used as padding bottom between text sections (headers, paragraphs, etc.)
};

const Theme = ({ children }) =>{
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
};

export default Theme;