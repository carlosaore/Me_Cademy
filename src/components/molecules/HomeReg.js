import React from 'react';
import Popup from '../Organism/Popup_form';
import homeData from '../../data/homeData';
import styled from 'styled-components';

const StyledRegForm = styled.div `
    height: 300px;
    width: 350px;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    border-radius: 3px;
    margin-top: 65px;

    h1 {
    font-size: 2.6rem;
    }

    h1, h3 {
    margin: 20px;
    }
`

const HomeReg = () => {
    return (
        <StyledRegForm>
            <div>
                <h1>MeCademy</h1>
                <h3>Erfolgreich bewerben!</h3>
                <Popup/>
            </div>
        </StyledRegForm>
    )
}

export default HomeReg;