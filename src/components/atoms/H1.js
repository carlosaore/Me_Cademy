import styled from "styled-components";

const H1 = styled.h1`
    text-align: center;
    color : ${props => props.theme.colors.bodyColor};
    margin-top : 0;
    margin-bottom : ${props => props.theme.largeviewport.padding};
    margin-right : auto;
    margin-left : auto;
`

export default H1;