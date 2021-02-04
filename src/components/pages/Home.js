import React from 'react';
import MetaDecorator from '../MetaDecorator/MetaDecorator';
import styled from 'styled-components';
import HomeSlider from '../molecules/HomeSlider';
import HomeReg from '../molecules/HomeReg';


const TopDiv = styled.div`
  position:relative;
  height: 440px;
  width:100%;
  background-image: url("/images/placeholder.png");
  background-repeat: no-repeat;
  background-position:center;
  background-size: cover;
  margin-top: -55px;
  z-index: -1;
`;

const MainDiv = styled.div`
    position: relative;

    .home__form {
    display: flex;
    justify-content:space-evenly;
    margin: 50px 0 50px 0;

    @media screen and (max-width: 751px){
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    }}
`;

const Home = () => {
    return (
        <div>
             <MetaDecorator
             description='Here is Home Page'
             title='My Home Page'
             />
             <TopDiv>
             </TopDiv>
            
            <MainDiv>
            <div className='home__form'>
            <HomeSlider/>
            <HomeReg/>
            </div>
            </MainDiv>
            
        </div>
    )
}

export default Home;
