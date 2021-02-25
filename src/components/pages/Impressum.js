import React from 'react';
import HeroImg from '../atoms/HeroImg';
import MainContentWrapper from '../atoms/MainContentWrapper';
import MetaDecorator from '../metadecorator/MetaDecorator';
import ImpressumArticles from '../molecules/ImpressumArticles';

const Impressum = () => {
    return (
        <div>
            <MetaDecorator
            description='Impressum'
            title='Impressum • MeCademy'
            />
            <HeroImg url={"/images/Bücherstapel-MentorMe.jpg"}/>
            <MainContentWrapper>
                <ImpressumArticles/>
            </MainContentWrapper>
        </div>
    )
}

export default Impressum;
