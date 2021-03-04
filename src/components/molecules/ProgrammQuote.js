import React from 'react';
import H2 from '../atoms/H2';
import H3 from '../atoms/H3';
import QuoteFormWrapper from '../atoms/QuoteFormWrapper';
import { textData } from '../../data/textData';

const ProgrammQuote = () => {
    return (
        <QuoteFormWrapper first>
            <H2 hyphensAuto quote>
                {textData.programmQuote}
            </H2>
            <H3 bigMarginBottom>{textData.programmSubTitle}</H3>
        </QuoteFormWrapper>
    );
}

export default ProgrammQuote;