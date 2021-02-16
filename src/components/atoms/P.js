import styled, { css } from "styled-components";


const P = styled.p`
    color : ${props => props.theme.colors.meCademyTextGrey};

    @media (min-width : ${props => props.theme.largeViewport.size}) {
        margin-bottom : ${props => props.theme.largeViewport.margin}
    }

    @media (min-width : ${props => props.theme.mediumViewport.size}) {
        margin-bottom : ${props => props.theme.mediumViewport.margin}
    }

    @media (max-width : ${props => props.theme.smallViewport.size}) {
        margin-bottom : ${props => props.theme.smallViewport.margin}
    }

    ${props => props.last &&
        css`
            :last-child {
                margin-bottom : 0px;
            }
        `
    }
`

export default P;