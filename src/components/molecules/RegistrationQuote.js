import React from 'react';
import H2 from '../atoms/H2';
import QuoteFormWrapper from '../atoms/QuoteFormWrapper';
import { textData } from '../../data/textData';

const RegistrationQuote = () => {
    return (
        <QuoteFormWrapper>
            <H2 last>
                {textData.registrationQuote}
            </H2>
        </QuoteFormWrapper>
    )
}

export default RegistrationQuote;