import React from 'react';
import H2 from '../atoms/H2';
import H3 from '../atoms/H3';
import QuoteFormWrapper from '../atoms/QuoteFormWrapper';
import { textData } from '../../data/textData';

const CoachesQuote = () => {
    return (
        <QuoteFormWrapper first>
            <H2 hyphensAuto quote>
                {textData.coachesQuote}
            </H2>
            <H3 bigMarginBottom>{textData.coachesSubTitle}</H3>
        </QuoteFormWrapper>
    );
}

export default CoachesQuote;
