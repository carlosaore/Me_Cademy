import React from 'react';
import HeroImg from '../atoms/HeroImg';
import MainContentWrapper from '../atoms/MainContentWrapper';
import MetaDecorator from '../metadecorator/MetaDecorator';
import DatenschutzArticles from '../molecules/DatenschutzArticles';

const Datenschutz = () => {
    return (
        <div>
            <MetaDecorator
            description='Datenschutz'
            title='Datenschutz • MeCademy'
            />
            <HeroImg url={"/images/FAQ-mentees-1024x683.png"}/>
            <MainContentWrapper>
                <DatenschutzArticles/>
            </MainContentWrapper>
        </div>
    )
}

export default Datenschutz;
