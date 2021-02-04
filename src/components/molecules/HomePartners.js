import React from 'react';
import styled from 'styled-components';

const StyledHomeLogoForm = styled.div `
img {
    width: auto;
    height: 200px;
    
    @media screen and (max-width: 870px){
        height: 150px;
    }    
    @media screen and (max-width: 550px){
        height: 100px;
    } 
}`

const HomePartners = () => {
    return (
        <StyledHomeLogoForm> 
            <img 
            className= "partnerslogo"
            alt= "partnerslogo"
            src= "/images/twologos.jpeg" />
        </StyledHomeLogoForm>
    )
}

export default HomePartners;