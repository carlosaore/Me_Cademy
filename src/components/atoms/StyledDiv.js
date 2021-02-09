import styled from "styled-components";

const StyledDiv = styled.div`
    width : ${props => props.width ? props.width : "100%" };
    margin-left : auto;
    margin-right : auto;
    margin-top : ${props => props.theme.largeviewport.bigmargin};
    margin-bottom : ${props => props.theme.largeviewport.margin}
`
export default StyledDiv;