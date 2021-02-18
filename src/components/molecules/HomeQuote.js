import React from 'react';
import H2 from '../atoms/H2';
import QuoteFormWrapper from '../atoms/QuoteFormWrapper';
import { textData } from '../../data/textData';

const HomeQuote = () => {
    return (
        <QuoteFormWrapper>
            <H2 last justify lastCenter hyphensAuto>
                {textData.HomeQuote}
            </H2>
        </QuoteFormWrapper>
    )
}

export default HomeQuote;
