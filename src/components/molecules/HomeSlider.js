import React, { useState } from 'react';
import homeData from '../../data/homeData';
import Arrows from '../atoms/homeArrows';
import Dots from '../atoms/homeDots';
import SliderContent from '../atoms/homeSliderContent';
import styled from 'styled-components';

//Refactor class to styled component
const StyledSliderForm = styled.div `
.slider-container {
    height: 430px;
    width: 300px;
    position: relative;
    background-color: #f5f5f5;
    overflow: hidden;
}
`

const len = homeData.length - 1;

function HomeSlider() {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <StyledSliderForm>
        <div className="slider-container">
            
            <SliderContent activeIndex={activeIndex} />
            <Arrows 
                prevSlide = {() =>
                setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                
                nextSlide = {() =>
                setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)} />
            <Dots 
                activeIndex={activeIndex}
                onClick={(activeIndex) => setActiveIndex(activeIndex)} />
            
        </div>
        </StyledSliderForm>
    )
}

export default HomeSlider;