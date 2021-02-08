import React from 'react';
import MetaDecorator from '../metadecorator/MetaDecorator';
import styled from 'styled-components';
import HomeSlider from '../molecules/HomeSlider';
import HomeReg from '../molecules/HomeReg';
import HomePartners from '../molecules/HomePartners';
import HomeHeroImg from '../molecules/HomeHeroImg';
import HomeQuote from '../molecules/HomeQuote';
import HeroImg from '../atoms/HeroImg';
import MainDiv from '../atoms/MainDivHome';



const Home = () => {
    return (
        <div>
             <MetaDecorator
             description='Here is Home Page'
             title='My Home Page'
             />
             <HeroImg />

            <MainDiv>
            <HomeQuote />
            <div className='home__form'>
            <HomeSlider/>
            <HomeReg/>
            </div>
            <HomeHeroImg/>
            <div className='home__logo'>
            <HomePartners/>
            </div>

            </MainDiv>
            
        </div>
    )
}

export default Home;
