import React from 'react'
import styled from 'styled-components';
import { textData } from '../../data/textData';
import ComponentWrapper from '../atoms/ComponentWrapper';
import H2 from '../atoms/H2';
import P from '../atoms/P';

const MainDiv = styled.div`
    display: flex;
    margin: auto;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width : 655px) {
        justify-content : center;
    }

`;

const NestedDiv = styled.div`
    width : 29%;
    max-width : 320px;
    min-width : 232px;
    margin-left : 15px;
    margin-right : 15px;
    margin-bottom : 30px;
    flex-grow : 1;

    @media (max-width : 655px) {
        max-width : 100%;
    }


        img {
            width : 100%;
            padding-bottom : 30px;
        }
`;

const NumbSteps = () => {
    return (
        <ComponentWrapper>
            <H2>
                Das erwartet dich in der „MeCademy – Erfolgreich bewerben als Akademikerin“
            </H2>
            <P alignCenter bold>
                Die Maßnahme startet im Februar 2021 mit seinem 8-wöchigen Durchlauf.
            </P>
            <P alignCenter>
                Was erwartet dich als Teilnehmerin und wie läuft die Anmeldung und das Programm ab? Diese 6 Schritte erklären es dir in aller Kürze:
            </P>
            <MainDiv>
                {textData.aboutNumeric.map((element, index) => (
                    <NestedDiv key={index}>
                        <img src={element.image} alt=""/>
                        <P bold hyphensAuto>{element.header}</P>
                        <P last hyphensAuto>{element.text}</P>
                    </NestedDiv>
                ))}
                
            </MainDiv>
        </ComponentWrapper>     
    )
}

export default NumbSteps;
