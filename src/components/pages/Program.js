import React from 'react';
import MetaDecorator from '../metadecorator/MetaDecorator';
import CoachesArticle from '../molecules/CoachesArticle';
import Quote from '../../components/molecules/Quote';
import ProgrammHeroImg from '../molecules/ProgrammHeroImg';

const Program = () => {
    return (
        <div>
             <MetaDecorator
             description='Here is Program Page'
             title='My Program Page'
             />
            <ProgrammHeroImg />
            <Quote />
            <CoachesArticle />
            <CoachesArticle />
            <CoachesArticle />
        </div>
    )
}

export default Program;
