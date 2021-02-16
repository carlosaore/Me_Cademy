import React from 'react';
import MetaDecorator from '../metadecorator/MetaDecorator';
import HomeSlider from '../molecules/HomeSlider';
import HomeReg from '../molecules/HomeReg';
import HomeQuote from '../molecules/HomeQuote';
import MainDiv from '../atoms/MainDivHome';
import HomeHeroImage from '../molecules/HomeHeroImg';

const Home = () => {
    return (
        <div>
            <MetaDecorator
                description='Home'
                title='MeCademy'
            />
            <HomeHeroImage />
            <MainDiv>
                <HomeQuote />
                <div className='home__form'>
                    <HomeSlider/>
                    <HomeReg/>
                </div>
            </MainDiv>
            
        </div>
    )
}

export default Home;
