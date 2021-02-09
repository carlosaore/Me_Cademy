import styled from "styled-components";

const Div = styled.div`
    width : ${props => props.width};
    height : ${props => props.height};
    background-color : ${props => props.backgroundColor};
    margin-top : ${props => props.marginTop};
    margin-bottom : ${props => props.marginBottom};
    display: flex;
    text-align: center;
    align-items: center;
    background-color : #5f7375;
    justify-content: center;
`

export default Div;