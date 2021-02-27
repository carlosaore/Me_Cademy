import styled, { css } from "styled-components";

const H1 = styled.h1`
    text-align : center;
    font-weight : 500; 
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
            color : ${props.theme.colors.teal};
        `
    }

    ${props => props.last && css`
            margin-bottom : 0px !important;
        `
    }
    
    ${props => props.bigMarginBottom && css`
            margin-bottom : ${props => props.theme.bigMarginBottom};
        `
    }

    ${props => !props.bigMarginBottom && css`
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

export default H1;