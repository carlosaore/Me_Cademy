import styled, { css } from "styled-components";

const H2 = styled.h2`
    padding-bottom : 0px;
    text-align : center;
    font-size : 1.4em;
    color : ${props => props.theme.colors.meCademyTextGrey};
    
    ${props => props.light && css`
            color : ${props.theme.colors.light};
        `
    }

    ${props => props.salmon && css`
            color : ${props.theme.colors.meCademySalmon};
        `
    }

    ${props => props.teal && css`
            color : ${props.theme.colors.meCademyTeal};
        `
    }

    ${props => props.last && css`
            margin-bottom : 0px !important;
        `
    }

    ${props => props.justify && css`
            text-align : justify;
        `
    }

    ${props => props.lastCenter && css`
            text-align-last : center;
        `
    }

    ${props => props.hyphensAuto && css`
            hyphens: auto;
        `
    }

    ${props => props.bigMarginBottom && css`
            margin-bottom : ${props => props.theme.bigMarginBottom};
        `
    }

    ${props => props.quote && css`
            margin-bottom: 2.75%;
            font-size: 1.7em;
            color: ${props.theme.colors.meCademySalmon};
        `
    }

    ${props => (!props.bigMarginBottom && !props.quote) && css`
            @media (min-width : ${props => props.theme.largeViewport.size}) {
            margin-bottom : ${props => props.theme.largeViewport.margin};

                ${props => props.alignLeftIfBig && css`
                        text-align : left;
                        margin-top : 0;   
                    `
                }
            }

            @media (min-width : ${props => props.theme.mediumViewport.minSize}) and (max-width : ${props => props.theme.mediumViewport.maxSize}) {
                margin-bottom : ${props => props.theme.mediumViewport.margin};
            }

            @media (max-width : ${props => props.theme.smallViewport.size}) {
                margin-bottom : ${props => props.theme.smallViewport.margin};
            }
        `
    }
`;

export default H2;