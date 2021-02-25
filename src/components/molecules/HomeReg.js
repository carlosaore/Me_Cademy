import React from 'react';
import Popup from './Popup_form';
import StyledRegForm from '../atoms/StyledRegForm';
import H1 from '../atoms/H1';
import H2 from '../atoms/H2';


const HomeReg = () => {
    return (
        <StyledRegForm>
            <div>
                <H1>MeCademy</H1>
                <H2>Erfolgreich bewerben!</H2>
                <Popup/>
            </div>
        </StyledRegForm>
    )
}

export default HomeReg;