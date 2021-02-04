import React from 'react';
import styled from 'styled-components';

const StyledHomeImgForm = styled.div `
img {
    width: 100%;
    height: 400px;
    object-fit: cover;
}

@media screen and (max-width: 376px){
   /* display: none; */
   }
`

const HomeImg = () => {
    return (
        <StyledHomeImgForm>
        <div>
            <img
            className=""
            src="./images/placeholder.png"
            atl=""/>
        </div>
        </StyledHomeImgForm>
    )
}

export default HomeImg;
