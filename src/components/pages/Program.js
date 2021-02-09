import React from 'react';
import MetaDecorator from '../metadecorator/MetaDecorator';
import CoachesArticle from '../molecules/CoachesArticle';
import ProgrammHeroImg from '../molecules/ProgrammHeroImg';
import Quote from '../../components/molecules/Quote';
import HeroImgMol from '../molecules/HeroImgMol';

const Program = () => {
    return (
        <div>
             <MetaDecorator
             description='Here is Program Page'
             title='My Program Page'
             />
            <HeroImgMol />
            <Quote />
            <CoachesArticle />
            <CoachesArticle />
            <CoachesArticle />
        </div>
    )
}

export default Program;
