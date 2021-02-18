import styled, { css } from "styled-components";

const MainContentWrapper = styled.div`
    width : ${props => props.theme.mainContentWidth};
    max-width : ${props => props.theme.mainContentMaxWidth};
    margin : 0 auto 0 auto;

    ${props => props.flex &&
        css`
            display : flex;
            justify-content: space-evenly;

            @media (max-width : ${props => props.theme.mediumViewport.minSize}) {
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: center;
            }
        `
    }
`

export default MainContentWrapper;