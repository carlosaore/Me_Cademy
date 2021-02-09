import React from 'react';
import Div from '../atoms/Div';
import P from '../atoms/P';
import QuoteFormWrapper from '../atoms/QuoteFormWrapper';

const HomeQuote = () => {
    return (
        <QuoteFormWrapper>
            <Div     
                height= "100px"
                marginTop= "30px"
                border= "5px solid black"
                display= "flex"
            >
                <P 
                    color= "white" 
                    fontSize= "30px"
                >
                    "Lassen Sie Ihre Arbeitslosigkeit hinter sich und finden Sie Ihren Traumjob bei uns"  
                </P>
            </Div>  
    </QuoteFormWrapper>
    )
}

export default HomeQuote;
