import styled, { css } from "styled-components";

const H2 = styled.h2`
    text-align : center;
    font-size : 1.4em;
    color : ${props => props.light
                ? props.theme.colors.light
                    : props.salmon
                        ? props.theme.colors.meCademySalmon
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
            margin-bottom : 0px !important
        `
    }
`

export default H2;