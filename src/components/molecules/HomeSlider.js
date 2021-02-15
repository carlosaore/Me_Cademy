import React, { useState } from 'react';
import Arrows from '../atoms/homeArrows';
import Dots from '../atoms/homeDots';
import SliderContent from '../atoms/homeSliderContent';
import styled from 'styled-components';
import { textData } from '../../data/textData';


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

const len = textData.testimonialData.length - 1;

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