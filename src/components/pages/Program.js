import React from 'react';
import MetaDecorator from '../metadecorator/MetaDecorator';
import CoachesArticle from '../molecules/CoachesArticle';
import ProgrammHeroImg from '../molecules/ProgrammHeroImg';
import Quote from '../../components/molecules/Quote';

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
