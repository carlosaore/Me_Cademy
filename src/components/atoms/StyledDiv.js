import styled, { css } from "styled-components";

const StyledDiv = styled.div`
    width : ${props => props.width ? props.width : "100%" };
    margin-left : auto;
    margin-right : auto;
    margin-top : ${props => props.theme.largeViewport.margin};
    margin-bottom : ${props => props.theme.largeViewport.margin};

    ${props => !props.marginTop && css`
        margin-top : 0;
    `}
`
export default StyledDiv;