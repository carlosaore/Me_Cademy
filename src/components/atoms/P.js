import styled, { css } from "styled-components";

// pass "last" as prop to remove margin on the last one, if needed

const P = styled.p`
    color : ${props => props.theme.colors.meCademyTextGrey};
    line-height : 1.7em;
    font-size : 0.9em;

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

    ${props => props.left &&
        css`
            margin-left : ${props => props.left}em;
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

    ${props => props.alignCenter &&
        css`
            text-align : center;
        `
    }

    ${props => props.bold &&
        css`
            font-weight : bold;
        `
    }

`

export default P;