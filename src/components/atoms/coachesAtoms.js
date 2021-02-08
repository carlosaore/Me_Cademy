import styled from "styled-components";

//StyledDiv.js
const StyledDiv = styled.div`
    width : ${props => props.width ? props.width : "100%" };
    margin-left : auto;
    margin-right : auto;
    margin-top : ${props => props.theme.largeviewport.bigmargin};
    margin-bottom : ${props => props.theme.largeviewport.margin}
`
//CarouselDiv.js
const CarouselDiv = styled.div`
    margin-bottom : ${props => props.theme.largeviewport.margin};
    width : 100%;
`
//TextDiv.js
const TextDiv = styled.div`
    width : 80%;
    margin : 0 auto 30px auto;
    text-align : center;
`

//Img.js
const Img = styled.img`
    margin-bottom : 5%;
    width : 100%;
`
//HeroImg.js
const HeroImg = styled.img`
    margin-top: -55px;
    margin-bottom : ${props => props.theme.largeviewport.margin};
    height : 100px;
    width : 100%;
    position : relative;
    height : 440px;
    width : 100%;
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1; 
`

//TextBox.js
const TextBox = styled.article`
    width : ${props => props.theme.largeviewport.width};
    margin-top : ${props => props.theme.largeviewport.bigmargin};
    margin-bottom : ${props => props.theme.largeviewport.bigmargin};
    margin-right : auto;
    margin-left : auto;
`

//H1.js
const H1 = styled.h1`
    text-align: center;
    color : ${props => props.theme.colors.bodyColor};
    margin-top : 0;
    margin-bottom : ${props => props.theme.largeviewport.padding};
    margin-right : auto;
    margin-left : auto;
`
//P.js
const P = styled.p`
    background-color : ${props => props.theme.colors.darkgrey};
    color : ${props => props.theme.colors.light};
    padding : ${props => props.theme.largeviewport.padding};
`

export {
    StyledDiv,
    CarouselDiv,
    TextDiv,
    HeroImg,
    Img,
    TextBox,
    H1,
    P
};
