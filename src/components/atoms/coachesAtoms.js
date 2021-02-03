import styled from "styled-components";

const CoachDiv = styled.div`
    padding-top : 20px;
    margin-left : 10px;
    margin-right : 10px;
`
const CarouselDiv = styled.div`
    width : ${props => props.width ? props.width : "100%" };
    margin : 0 auto 0 auto;
`
const TextDiv = styled.div`
    width : 80%;
    margin-left : auto;
    margin-right : auto;
    margin-bottom : 5%;
    text-align : center;
`

const Img = styled.img`
    margin-bottom : 5%;
    width : 100%
`

export {
    CoachDiv,
    CarouselDiv,
    TextDiv,
    Img
};