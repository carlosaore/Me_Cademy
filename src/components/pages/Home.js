import React from 'react';
import MetaDecorator from '../metadecorator/MetaDecorator';
import HomeSlider from '../molecules/HomeSlider';
import HomeReg from '../molecules/HomeReg';
import HomePartners from '../molecules/HomePartners';
import HomeQuote from '../molecules/HomeQuote';
import MainDiv from '../atoms/MainDivHome';
import HomeHeroImage from '../molecules/HomeHeroImg';
import HomeHeroImage2 from '../molecules/HomeHeroImage2';

const Home = () => {
    return (
        <div>
             <MetaDecorator
             description='Here is Home Page'
             title='My Home Page'
             />
            <HomeHeroImage />

            <MainDiv>
            <HomeQuote />
            <div className='home__form'>
            <HomeSlider/>
            <HomeReg/>
            </div>
            <HomeHeroImage2 />
            <div className='home__logo'>
            <HomePartners/>
            </div>

            </MainDiv>
            
        </div>
    )
}

export default Home;
