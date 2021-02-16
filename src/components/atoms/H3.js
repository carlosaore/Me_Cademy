import styled, { css } from "styled-components";

const H3 = styled.h3`
    margin-top : 0px;
    text-align : center;
    font-size : 1.3em;
    font-weight : 500;
    color : ${props => props.light
                ? props.theme.colors.light
                    : props.salmon
                        ? props.theme.colors.meCademySalmon
                        : props.theme.colors.meCademyTextGrey};
    
    @media (min-width : ${props => props.theme.largeViewport.size}) {
        margin-bottom : ${props => props.theme.largeViewport.margin};

        ${props => props.alignLeftIfBig &&
        css`
            text-align : left;
            margin-top : 0        
        `
    }

    }

    @media (min-width : ${props => props.theme.mediumViewport.minSize}) and (max-width : ${props => props.theme.mediumViewport.maxSize}) {
        margin-bottom : ${props => props.theme.mediumViewport.margin}
    }

    @media (max-width : ${props => props.theme.smallViewport.size}) {
        margin-bottom : ${props => props.theme.smallViewport.margin}
    }

    ${props => props.last &&
        css`
            margin-bottom : 0px !!important
        `
    }



`

export default H3;