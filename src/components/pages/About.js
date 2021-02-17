import React from 'react'
import MetaDecorator from '../metadecorator/MetaDecorator';
import AboutAccordion from '../molecules/AboutAccordion';
import AboutTeam from '../molecules/AboutTeam';
import AboutArticles from '../molecules/AboutArticles';
import NumbSteps from '../organism/NumbSteps';
import { textData } from '../../data/textData';
import AboutHeroImg from '../molecules/AboutHeroImg';
import MainContentWrapper from "../atoms/MainContentWrapper";

const About = () => {
    return (
        <div>
            <MetaDecorator
             description='About'
             title='About • MeCademy'
             />
            <AboutHeroImg url={textData.aboutHeroImg}/>
            <MainContentWrapper>
                <NumbSteps/>
                <AboutArticles />
                <AboutAccordion />
                <AboutTeam />
            </MainContentWrapper>
        </div>
    )
}

export default About;