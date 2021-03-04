import styled from 'styled-components';

const StyledRegForm = styled.div `
    height: 300px;
    width: 350px;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    border-radius: 3px;
    margin-top: 30px;

    h1, h2 {
        margin:40px;
    }
`;

const GotoRegButton = styled.div`
    height: 2.4em;
    background: ${props => props.theme.colors.meCademySalmon};
    border-radius: 5px;
    border: none;
    width: 65%;
    margin: 0 auto 0 auto;
    color: white;
    font-size: 1.5em;
    line-height: 2.4em;
`

export { StyledRegForm, GotoRegButton };