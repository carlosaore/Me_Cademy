import React from 'react';
import StyledHomeLogoForm from '../atoms/StyledHomeLogoForm';

const HomePartners = () => {
    return (
        <StyledHomeLogoForm> 
            <img 
                className= "partnerslogo"
                alt= "partnerslogo"
                src= "/images/twologos.jpeg"
            />
        </StyledHomeLogoForm>
    )
}

export default HomePartners;