import React from 'react'
import MetaDecorator from '../MetaDecorator/MetaDecorator';

const About = () => {
    return (
        <div>
            <MetaDecorator
             description='Here is About Page'
             title='My About Page'
             />
           
            <p>Hola! About here</p>
        </div>
    )
}

export default About;