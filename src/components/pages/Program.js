import React from 'react';
import MetaDecorator from '../metadecorator/MetaDecorator';
import ProgrammHeroImg from '../molecules/ProgrammHeroImg';
import MainContentWrapper from '../atoms/MainContentWrapper';
import ProgrammArticles from '../molecules/ProgrammArticles';
import ProgrammAccordion from '../molecules/ProgrammAccordion';
import NumbSteps from '../organism/NumbSteps';

const Program = () => {
    return (
        <div>
            <MetaDecorator
                description='Programm'
                title='Programm • MeCademy'
            />
            <ProgrammHeroImg />
            <MainContentWrapper>
                <ProgrammArticles />
                <ProgrammAccordion />
                <NumbSteps />
            </MainContentWrapper>
        </div>
    )
}

export default Program;
