import styled, { css } from "styled-components";

const H1 = styled.h1`
    text-align : center;
    font-weight : 500; 
    color : ${props => props.light
                ? props.theme.colors.light
                : props.theme.colors.meCademyTextGrey};
    
    @media (min-width : ${props => props.theme.largeViewport.size}) {
        margin-bottom : ${props => props.theme.largeViewport.margin}
    }

    @media (max-width : ${props => props.theme.mediumViewport.size}) {
        margin-bottom : ${props => props.theme.mediumViewport.margin}
    }

    @media (max-width : ${props => props.theme.smallViewport.size}) {
        margin-bottom : ${props => props.theme.smallViewport.margin}
    }

    ${props => props.last &&
        css`
            margin-bottom : 0px !important;
        `
    }

`

export default H1;