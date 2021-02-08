import styled from "styled-components";

const TextBox = styled.article`
    width : ${props => props.theme.largeviewport.width};
    margin-top : ${props => props.theme.largeviewport.bigmargin};
    margin-bottom : ${props => props.theme.largeviewport.bigmargin};
    margin-right : auto;
    margin-left : auto;
`

export default TextBox;