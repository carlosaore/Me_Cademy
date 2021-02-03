import styled from "styled-components";

const StyledDiv = styled.div`
    width : ${props => props.width ? props.width : "100%" };
    margin : 0 auto 0 auto;
`
const CarouselDiv = styled.div`
    margin-bottom : 50px;
    width : 100%;
`
const TextDiv = styled.div`
    width : 80%;
    margin : 0 auto 30px auto;
    text-align : center;
`

const Img = styled.img`
    margin-bottom : 5%;
    width : 100%
`

const TextBox = styled.article`
    width : ${props => props.theme.largeviewport.width};
    margin-top : ${props => props.theme.largeviewport.padding};
    margin-bottom : ${props => props.theme.largeviewport.padding};
    margin-right : auto;
    margin-left : auto;
`

const H1 = styled.h1`
    text-align: center;
    margin-top : "0";
    margin-bottom : ${props => props.theme.largeviewport.padding};
    margin-right : auto;
    margin-left : auto;
`

const P = styled.p`
    background-color : ${props => props.theme.colors.darkgrey};
    color : ${props => props.theme.colors.light};
    padding : ${props => props.theme.largeviewport.padding};
`

export {
    StyledDiv,
    CarouselDiv,
    TextDiv,
    Img,
    TextBox,
    H1,
    P
};