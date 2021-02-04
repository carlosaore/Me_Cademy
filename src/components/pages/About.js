import React from 'react'
import MetaDecorator from '../MetaDecorator/MetaDecorator';
import AboutAccordion from '../molecules/AboutAccordion';
import AboutTeam from '../molecules/AboutTeam';

const About = () => {
    return (
        <div>
            <MetaDecorator
             description='Here is About Page'
             title='My About Page'
             />
           
            <AboutAccordion />
            <AboutTeam />
        </div>
    )
}

export default About;