import React from 'react';
import styled from 'styled-components';
import { textData } from '../../data/textData';


const StyledDotsForm = styled.div `

.all-dots {
    width: 100%;
    position: absolute;
    display: flex;
    top: 85%;
    justify-content: center;
    margin-top: 40px;
}

.dot {
    cursor: pointer;
    height: 0.5rem;
    width: 0.5rem;
    margin: 1px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
}

.active-dot, .dot:hover {
    background-color: rgba(0, 0, 0, 0.6);
}
`


function Dots(props) {
    return (
        <StyledDotsForm>
        <div className="all-dots">
            {textData.testimonialData.map((slide, index) => (
                <span key={index}
                    className={`${
                    props.activeIndex === index ? "dot active-dot" : "dot"
                    }`}
                    onClick={(event) => props.onClick((event.target.value = index))}
                ></span>
            ))}
        </div>
        </StyledDotsForm>
    )
}

export default Dots;
