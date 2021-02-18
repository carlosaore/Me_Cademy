import styled, { css } from "styled-components";

const H2 = styled.h2`
    padding-bottom : 0px;
    text-align : center;
    font-size : 1.4em;
    color : ${props => props.light
                ? props.theme.colors.light
                    : props.salmon
                        ? props.theme.colors.meCademySalmon
                        : props.teal
                            ? props.theme.colors.meCademyTeal
                            : props.theme.colors.meCademyTextGrey};

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

    ${props => props.justify &&
        css`
            text-align : justify;
        `
    }

    ${props => props.lastCenter &&
        css`
            text-align-last : center;
        `
    }

`

export default H2;