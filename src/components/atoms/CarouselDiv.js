import styled from "styled-components";

const CarouselDiv = styled.div`
    width: 100%;

    @media (min-width: ${props => props.theme.largeViewport.size}) {
        margin-bottom: ${props => props.theme.largeViewport.margin}
    }

    @media (min-width: ${props => props.theme.mediumViewport.minSize}) and (max-width : ${props => props.theme.mediumViewport.maxSize}) {
        margin-bottom: ${props => props.theme.mediumViewport.margin}
    }

    @media (max-width: ${props => props.theme.smallViewport.size}) {
        margin-bottom: ${props => props.theme.smallViewport.margin}
    }
`;

export default CarouselDiv;
