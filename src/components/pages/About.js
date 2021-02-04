import React from 'react'
import MetaDecorator from '../MetaDecorator/MetaDecorator';
import AboutAccordion from '../molecules/AboutAccordion';

const About = () => {
    return (
        <div>
            <MetaDecorator
             description='Here is About Page'
             title='My About Page'
             />
           
            <AboutAccordion />
        </div>
    )
}

export default About;