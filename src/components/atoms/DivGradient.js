import styled from 'styled-components';

const DivGradient = styled.div`
    width : 80%;
    max-width : ${props => props.theme.mainContentMaxWidth};
    background: linear-gradient(180deg, #5f737bc4, #49585f);
    padding : 2em;
    margin-bottom : 50px;
`

export default DivGradient;