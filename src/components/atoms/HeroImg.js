import styled, { css } from "styled-components";

const HeroImg = styled.div`
    margin-bottom: 60px;
    background-position : center;
    height: 440px;
    width: 100%;
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    z-index: -1;

    ${props => props.home && css`
        background-position: 50% -500px;

        @media (max-width: 1440px) {
            background-position: 50% -300px;
        }
    `}

    ${props => props.aboutPage && css`
        background-position: 50% -200px;

        @media (max-width: 1440px) {
            background-position: 50% -100px;
        }
    `}

    ${props => props.coaches && css`
        background-position: 100% -400px;

        @media (max-width: 1440px) {
            background-position: 100% -300px;
        }
    `}

    ${props => props.programm && css`
        background-position: 25% 30%;

        @media (max-width: 1440px) {
            background-size: auto;
            background-position: 30% 50%;
        }
    `}

    ${props => props.registration && css`
        background-position: 100% 0%;

        @media (max-width: 1440px) {
            background-position: 70% 50%;
        }
    `}
`;

export default HeroImg;