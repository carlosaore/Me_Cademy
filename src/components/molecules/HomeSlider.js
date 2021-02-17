import React, { useState } from 'react';
import Arrows from '../atoms/homeArrows';
import Dots from '../atoms/homeDots';
import SliderContent from '../atoms/homeSliderContent';
import styled from 'styled-components';
import { textData } from '../../data/textData';


//Refactor class to styled component
const StyledSliderForm = styled.div `
    height: 430px;
    width: 300px;
    position: relative;
    background-color: ${props => props.theme.colors.meCademyLightGrey};
    overflow: hidden;

    @media (min-width : ${props => props.theme.largeViewport.size}) {
            margin-bottom : ${props => props.theme.largeViewport.margin}
        }

    @media (min-width : ${props => props.theme.mediumViewport.minSize}) and (max-width : ${props => props.theme.mediumViewport.maxSize}) {
        margin-bottom : ${props => props.theme.mediumViewport.margin}
    }

    @media (max-width : ${props => props.theme.smallViewport.size}) {
        margin-bottom : ${props => props.theme.smallViewport.margin}
    }

`

const len = textData.testimonialData.length - 1;

function HomeSlider() {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
        <StyledSliderForm>
            <SliderContent activeIndex={activeIndex} />
            <Arrows 
                prevSlide = {() =>
                setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                
                nextSlide = {() =>
                setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)} />
            <Dots 
                activeIndex={activeIndex}
                onClick={(activeIndex) => setActiveIndex(activeIndex)} />           
        </StyledSliderForm>
        </>
    )
}

export default HomeSlider;