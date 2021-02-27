import styled from "styled-components";

const HeroImg = styled.img`
    margin-top: 80px;
    margin-bottom : 60px;
    background-position : 50%;
    position : relative;
    height : 440px;
    width : 100%;
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed; // Do you like it?
    z-index: -1;
`;

export default HeroImg;