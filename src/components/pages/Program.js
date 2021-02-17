import React from 'react';
import MetaDecorator from '../metadecorator/MetaDecorator';
import CoachesArticle from '../molecules/CoachesArticle';
import Quote from '../../components/molecules/Quote';
import ProgrammHeroImg from '../molecules/ProgrammHeroImg';
import MainContentWrapper from '../atoms/MainContentWrapper';

const Program = () => {
    return (
        <div>
            <MetaDecorator
                description='Programm'
                title='Programm • MeCademy'
            />
            <ProgrammHeroImg />
            <MainContentWrapper>
                <Quote />
                <CoachesArticle />
                <CoachesArticle />
                <CoachesArticle />
            </MainContentWrapper>
        </div>
    )
}

export default Program;
