import styled, { css } from "styled-components";

// pass "last" as prop to remove margin on the last one, if needed

const Ol = styled.ol`
    color : ${props => props.theme.colors.meCademyTextGrey};
    line-height : 1.7em;
    font-size : 0.9em;
    margin-left : 1em;

    @media (min-width : ${props => props.theme.largeViewport.size}) {
        margin-bottom : ${props => props.theme.largeViewport.margin}
    }

    @media (min-width : ${props => props.theme.mediumViewport.minSize}) and (max-width : ${props => props.theme.mediumViewport.maxSize}) {
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

    ${props => props.small &&
        css`
            font-size : 70%;
        `
    }

    a {
        text-decoration : none;
        font-weight : bold;
        color : ${props => props.theme.colors.meCademySalmon}
    }

`

export default Ol;