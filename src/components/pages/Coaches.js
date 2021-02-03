import React from 'react'
import MetaDecorator from '../MetaDecorator/MetaDecorator';
import CoachesCarousel from '../molecules/CoachesCarousel';

const Coaches = () => {
    return (
        <div>
            <MetaDecorator
            description='Here is Coaches Page'
            title='My Coaches Page'
            />

          <p>Hola! Coaches here</p>
          <CoachesCarousel />
        </div>
    )
}

export default Coaches;