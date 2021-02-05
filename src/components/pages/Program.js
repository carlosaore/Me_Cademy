import React from 'react';
import MetaDecorator from '../MetaDecorator/MetaDecorator';
import CoachesArticle from '../molecules/CoachesArticle';
import ProgrammHeroImg from '../molecules/ProgrammHeroImg';


const Program = () => {
    return (
        <div>
             <MetaDecorator
             description='Here is Program Page'
             title='My Program Page'
             />
            <ProgrammHeroImg />
            <CoachesArticle />
            <CoachesArticle />
            <CoachesArticle />
        </div>
    )
}

export default Program;
