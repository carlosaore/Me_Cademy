import React from 'react'
import MetaDecorator from '../MetaDecorator/MetaDecorator';
import AboutAccordion from '../molecules/AboutAccordion';
import AboutArticles from '../molecules/AboutArticles';

const About = () => {
    return (
        <div>
            <MetaDecorator
             description='Here is About Page'
             title='My About Page'
             />
            <AboutArticles />
            <AboutAccordion />
        </div>
    )
}

export default About;