import styled from "styled-components";


const P = styled.p`
    background-color : ${props => props.theme.colors.darkgrey};
    color : ${props => props.theme.colors.light};
    padding : ${props => props.theme.largeviewport.padding};
    font-size : ${props => props.theme.fontSize};
`

export default P;