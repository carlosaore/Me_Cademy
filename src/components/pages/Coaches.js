import React from 'react'
import MetaDecorator from '../MetaDecorator/MetaDecorator';
import CoachesCarousel from '../molecules/CoachesCarousel';
import CoachesAccordion from '../molecules/CoachesAccordion';
import CoachesArticle from '../molecules/CoachesArticle';
const Coaches = () => {
    return (
        <div>
            <MetaDecorator
            description='Here is Coaches Page'
            title='My Coaches Page'
            />

          <p>Hola! Coaches here</p>
          <CoachesArticle />
          <CoachesCarousel />
          <CoachesAccordion />
        </div>
    )
}

export default Coaches;