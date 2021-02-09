import styled from 'styled-components';

const QuoteFormWrapper = styled.div`
    @media screen and (max-width: 870px){
        P {
        font-size: 1.5em;
        margin: 0 20px 0 20px;
    }}

    @media screen and (max-width: 550px){
        P {
        font-size: 1.2em;
        margin: 0 20px 0 20px;
    }}

    @media screen and (max-width: 410px){
        P {
        font-size: 1em;
        margin: 0 20px 0 20px;
    }}
`

export default QuoteFormWrapper;