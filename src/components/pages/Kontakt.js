import React from 'react';
import HeroImg from '../atoms/HeroImg';
import MainContentWrapper from '../atoms/MainContentWrapper';
import MetaDecorator from '../metadecorator/MetaDecorator';
import KontaktArticles from '../molecules/KontaktArticles';


const Kontakt = () => {
    return (
        <div>
            <MetaDecorator
            description='Kontakt'
            title='Kontakt • MeCademy'
            />
            <HeroImg url={"/images/magenta-stifte.jpg"}/>
            <MainContentWrapper>
                <KontaktArticles/>
            </MainContentWrapper>
        </div>
    )
}

export default Kontakt;
