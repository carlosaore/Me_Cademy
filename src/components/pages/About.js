import React from 'react'
import MetaDecorator from '../MetaDecorator/MetaDecorator';
import AboutAccordion from '../molecules/AboutAccordion';
import AboutTeam from '../molecules/AboutTeam';
import AboutArticles from '../molecules/AboutArticles';
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

const About = () => {
    return (
        <div>
            <MetaDecorator
             description='Here is About Page'
             title='My About Page'
             />
             <TopDiv>
             </TopDiv>
            <AboutArticles />
            <AboutAccordion />
            <AboutTeam />
        </div>
    )
}

export default About;