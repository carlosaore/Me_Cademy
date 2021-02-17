import styled from "styled-components";

const HeroImg = styled.img`
    margin-top: -55px;
    margin-bottom : 60px;
    background-position : 50%;
    position : relative;
    height : 440px;
    width : 100%;
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
`

export default HeroImg;