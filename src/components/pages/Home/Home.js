import React from 'react';
import MetaDecorator from '../../MetaDecorator/MetaDecorator';
import styled from 'styled-components';

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
    position:relative;
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
            <p>Hola! Home here</p>
            </MainDiv>
            
        </div>
    )
}

export default Home;
