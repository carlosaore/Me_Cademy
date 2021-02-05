import React from 'react';
import Div from '../Atoms/quoteBoxAtoms/Div';
import P from '../Atoms/quoteBoxAtoms/P';
import styled from 'styled-components';

const StyledHomeQuoteForm = styled.div `
     
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

const HomeQuote = () => {
    return (
        <StyledHomeQuoteForm>
          <Div     
            height= "100px"
            marginTop= "30px"
            border= "5px solid black"
            display= "flex" >
            <P 
            color= "white" 
            fontSize= "30px" >
            "Lassen Sie Ihre Arbeitslosigkeit hinter sich und finden Sie Ihren Traumjob bei uns"  
            </P>
            </Div>  
        </StyledHomeQuoteForm>
    )
}

export default HomeQuote;
