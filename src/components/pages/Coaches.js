import React from 'react'
import MetaDecorator from '../MetaDecorator/MetaDecorator';
import CoachesCarousel from '../Molecules/CoachesCarousel';
import CoachesAccordion from '../Molecules/CoachesAccordion';
import CoachesArticle from '../Molecules/CoachesArticle';
import CoachesHeroImg from '../Molecules/CoachesHeroImg';

const Coaches = () => {
    return (
        <div>
            <MetaDecorator
                description='Here is Coaches Page'
                title='My Coaches Page'
            />
            <CoachesHeroImg />
            <CoachesArticle />
            <CoachesCarousel />
            <CoachesAccordion />
        </div>
    )
}

export default Coaches;