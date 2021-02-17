import React from 'react'
import styled from 'styled-components';
import { textData } from '../../data/textData';
import ComponentWrapper from '../atoms/ComponentWrapper';

const MainDiv = styled.div`
    position:relative;
    background-color: ${props => props.theme.colors.meCademyLightGrey};
    display: flex;
    margin: auto;
    position: center;
    flex-wrap: wrap;
`;

const NestedDiv = styled.div`
    display: flex;
    height: 600px;
    margin-top:0px;
    width: 400px;
    flex-wrap: wrap;
    margin: auto;

        img {
            width:100%;
            height: 35%;
        }

        p {
            margin: 10px;
        }
`;

const NumbSteps = () => {
    return (
        <ComponentWrapper>
            <MainDiv>
            <NestedDiv>
                <img src='https://via.placeholder.com/150' alt=""/>
                <p>{textData.aboutNumeric[0].one}</p>
            </NestedDiv>
            <NestedDiv>
                <img src='https://via.placeholder.com/150' alt=""/>
                <p>{textData.aboutNumeric[0].two}</p>
            </NestedDiv>
            <NestedDiv>
                <img src='https://via.placeholder.com/150' alt=""/>
                <p>{textData.aboutNumeric[0].three}</p>
            </NestedDiv>
            <NestedDiv>
                <img src='https://via.placeholder.com/150' alt=""/>
                <p>{textData.aboutNumeric[0].four}</p>
            </NestedDiv>
            <NestedDiv>
                <img src='https://via.placeholder.com/150' alt=""/>
                <p>{textData.aboutNumeric[0].five}</p>
            </NestedDiv>
            <NestedDiv>
                <img src='https://via.placeholder.com/150' alt=""/>
                <p>{textData.aboutNumeric[0].six}</p>
            </NestedDiv>
            </MainDiv>
        </ComponentWrapper>     
    )
}

export default NumbSteps;
