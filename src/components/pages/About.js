import React from 'react'
import MetaDecorator from '../metadecorator/MetaDecorator';
import AboutAccordion from '../molecules/AboutAccordion';
import AboutTeam from '../molecules/AboutTeam';
import AboutArticles from '../molecules/AboutArticles';
import styled from 'styled-components';
import Numb_steps from '../organism/Numb_steps';
import { textData } from '../../data/textData';
import AboutHeroImg from '../molecules/AboutHeroImg';

const About = () => {
    return (
        <div>
            <MetaDecorator
             description='Here is About Page'
             title='My About Page'
             />
            <AboutHeroImg url={textData.aboutHeroImg}/>
            <Numb_steps/>
            <AboutArticles />
            <AboutAccordion />
            <AboutTeam />
        </div>
    )
}

export default About;